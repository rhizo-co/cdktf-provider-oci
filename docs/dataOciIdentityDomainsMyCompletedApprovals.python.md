# `dataOciIdentityDomainsMyCompletedApprovals` Submodule <a name="`dataOciIdentityDomainsMyCompletedApprovals` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsMyCompletedApprovals <a name="DataOciIdentityDomainsMyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals oci_identity_domains_my_completed_approvals}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals(
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
  my_completed_approval_count: typing.Union[int, float] = None,
  my_completed_approval_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.myCompletedApprovalCount">my_completed_approval_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.myCompletedApprovalFilter">my_completed_approval_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_completed_approval_count`<sup>Optional</sup> <a name="my_completed_approval_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.myCompletedApprovalCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}.

---

##### `my_completed_approval_filter`<sup>Optional</sup> <a name="my_completed_approval_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.myCompletedApprovalFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalCount">reset_my_completed_approval_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalFilter">reset_my_completed_approval_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_my_completed_approval_count` <a name="reset_my_completed_approval_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalCount"></a>

```python
def reset_my_completed_approval_count() -> None
```

##### `reset_my_completed_approval_filter` <a name="reset_my_completed_approval_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetMyCompletedApprovalFilter"></a>

```python
def reset_my_completed_approval_filter() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsMyCompletedApprovals resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsMyCompletedApprovals resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsMyCompletedApprovals to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsMyCompletedApprovals that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsMyCompletedApprovals to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovals">my_completed_approvals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCountInput">my_completed_approval_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilterInput">my_completed_approval_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCount">my_completed_approval_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilter">my_completed_approval_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_completed_approvals`<sup>Required</sup> <a name="my_completed_approvals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovals"></a>

```python
my_completed_approvals: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList</a>

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `my_completed_approval_count_input`<sup>Optional</sup> <a name="my_completed_approval_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCountInput"></a>

```python
my_completed_approval_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_completed_approval_filter_input`<sup>Optional</sup> <a name="my_completed_approval_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilterInput"></a>

```python
my_completed_approval_filter_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `my_completed_approval_count`<sup>Required</sup> <a name="my_completed_approval_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalCount"></a>

```python
my_completed_approval_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `my_completed_approval_filter`<sup>Required</sup> <a name="my_completed_approval_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.myCompletedApprovalFilter"></a>

```python
my_completed_approval_filter: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovals.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsMyCompletedApprovalsConfig <a name="DataOciIdentityDomainsMyCompletedApprovalsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig(
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
  my_completed_approval_count: typing.Union[int, float] = None,
  my_completed_approval_filter: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalCount">my_completed_approval_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalFilter">my_completed_approval_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#idcs_endpoint DataOciIdentityDomainsMyCompletedApprovals#idcs_endpoint}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#authorization DataOciIdentityDomainsMyCompletedApprovals#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#compartment_id DataOciIdentityDomainsMyCompletedApprovals#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#id DataOciIdentityDomainsMyCompletedApprovals#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `my_completed_approval_count`<sup>Optional</sup> <a name="my_completed_approval_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalCount"></a>

```python
my_completed_approval_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_count DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_count}.

---

##### `my_completed_approval_filter`<sup>Optional</sup> <a name="my_completed_approval_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.myCompletedApprovalFilter"></a>

```python
my_completed_approval_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#my_completed_approval_filter DataOciIdentityDomainsMyCompletedApprovals#my_completed_approval_filter}.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#resource_type_schema_version DataOciIdentityDomainsMyCompletedApprovals#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_by DataOciIdentityDomainsMyCompletedApprovals#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#sort_order DataOciIdentityDomainsMyCompletedApprovals#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_my_completed_approvals#start_index DataOciIdentityDomainsMyCompletedApprovals#start_index}.

---

### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals()
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy()
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta()
```


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMeta</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.expires">expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.myCompletedApprovalId">my_completed_approval_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestCreatedTime">request_created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestDetails">request_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestId">request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestOcid">request_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceDisplayName">resource_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.responseTime">response_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `expires`<sup>Required</sup> <a name="expires" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.expires"></a>

```python
expires: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `justification`<sup>Required</sup> <a name="justification" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsMetaList</a>

---

##### `my_completed_approval_id`<sup>Required</sup> <a name="my_completed_approval_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.myCompletedApprovalId"></a>

```python
my_completed_approval_id: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `request_created_time`<sup>Required</sup> <a name="request_created_time" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestCreatedTime"></a>

```python
request_created_time: str
```

- *Type:* str

---

##### `request_details`<sup>Required</sup> <a name="request_details" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestDetails"></a>

```python
request_details: str
```

- *Type:* str

---

##### `request_id`<sup>Required</sup> <a name="request_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestId"></a>

```python
request_id: str
```

- *Type:* str

---

##### `request_ocid`<sup>Required</sup> <a name="request_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.requestOcid"></a>

```python
request_ocid: str
```

- *Type:* str

---

##### `resource_display_name`<sup>Required</sup> <a name="resource_display_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceDisplayName"></a>

```python
resource_display_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `response_time`<sup>Required</sup> <a name="response_time" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.responseTime"></a>

```python
response_time: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovals</a>

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference <a name="DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_my_completed_approvals

dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsMyCompletedApprovals.DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags">DataOciIdentityDomainsMyCompletedApprovalsMyCompletedApprovalsTags</a>

---



