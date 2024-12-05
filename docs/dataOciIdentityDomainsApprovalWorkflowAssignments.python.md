# `dataOciIdentityDomainsApprovalWorkflowAssignments` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowAssignments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignments <a name="DataOciIdentityDomainsApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments oci_identity_domains_approval_workflow_assignments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments(
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
  approval_workflow_assignment_count: typing.Union[int, float] = None,
  approval_workflow_assignment_filter: str = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.approvalWorkflowAssignmentCount">approval_workflow_assignment_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.approvalWorkflowAssignmentFilter">approval_workflow_assignment_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}.

---

##### `approval_workflow_assignment_count`<sup>Optional</sup> <a name="approval_workflow_assignment_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.approvalWorkflowAssignmentCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}.

---

##### `approval_workflow_assignment_filter`<sup>Optional</sup> <a name="approval_workflow_assignment_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.approvalWorkflowAssignmentFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentCount">reset_approval_workflow_assignment_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentFilter">reset_approval_workflow_assignment_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_approval_workflow_assignment_count` <a name="reset_approval_workflow_assignment_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentCount"></a>

```python
def reset_approval_workflow_assignment_count() -> None
```

##### `reset_approval_workflow_assignment_filter` <a name="reset_approval_workflow_assignment_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetApprovalWorkflowAssignmentFilter"></a>

```python
def reset_approval_workflow_assignment_filter() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowAssignments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowAssignments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsApprovalWorkflowAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignments">approval_workflow_assignments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCountInput">approval_workflow_assignment_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilterInput">approval_workflow_assignment_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCount">approval_workflow_assignment_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilter">approval_workflow_assignment_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `approval_workflow_assignments`<sup>Required</sup> <a name="approval_workflow_assignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignments"></a>

```python
approval_workflow_assignments: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_workflow_assignment_count_input`<sup>Optional</sup> <a name="approval_workflow_assignment_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCountInput"></a>

```python
approval_workflow_assignment_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_workflow_assignment_filter_input`<sup>Optional</sup> <a name="approval_workflow_assignment_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilterInput"></a>

```python
approval_workflow_assignment_filter_input: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_workflow_assignment_count`<sup>Required</sup> <a name="approval_workflow_assignment_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentCount"></a>

```python
approval_workflow_assignment_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_workflow_assignment_filter`<sup>Required</sup> <a name="approval_workflow_assignment_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.approvalWorkflowAssignmentFilter"></a>

```python
approval_workflow_assignment_filter: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments()
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow()
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo()
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy()
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta()
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags()
```


### DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  approval_workflow_assignment_count: typing.Union[int, float] = None,
  approval_workflow_assignment_filter: str = None,
  attributes: str = None,
  attribute_sets: typing.List[str] = None,
  authorization: str = None,
  compartment_id: str = None,
  id: str = None,
  resource_type_schema_version: str = None,
  sort_by: str = None,
  sort_order: str = None,
  start_index: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentCount">approval_workflow_assignment_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentFilter">approval_workflow_assignment_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowAssignments#idcs_endpoint}.

---

##### `approval_workflow_assignment_count`<sup>Optional</sup> <a name="approval_workflow_assignment_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentCount"></a>

```python
approval_workflow_assignment_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_count DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_count}.

---

##### `approval_workflow_assignment_filter`<sup>Optional</sup> <a name="approval_workflow_assignment_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.approvalWorkflowAssignmentFilter"></a>

```python
approval_workflow_assignment_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#approval_workflow_assignment_filter DataOciIdentityDomainsApprovalWorkflowAssignments#approval_workflow_assignment_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attributes DataOciIdentityDomainsApprovalWorkflowAssignments#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#attribute_sets DataOciIdentityDomainsApprovalWorkflowAssignments#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#authorization DataOciIdentityDomainsApprovalWorkflowAssignments#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#compartment_id DataOciIdentityDomainsApprovalWorkflowAssignments#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#id DataOciIdentityDomainsApprovalWorkflowAssignments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowAssignments#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_by DataOciIdentityDomainsApprovalWorkflowAssignments#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#sort_order DataOciIdentityDomainsApprovalWorkflowAssignments#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_assignments#start_index DataOciIdentityDomainsApprovalWorkflowAssignments#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflow</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedTo</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.approvalWorkflow">approval_workflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignedTo">assigned_to</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignmentType">assignment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_workflow`<sup>Required</sup> <a name="approval_workflow" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.approvalWorkflow"></a>

```python
approval_workflow: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsApprovalWorkflowList</a>

---

##### `assigned_to`<sup>Required</sup> <a name="assigned_to" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignedTo"></a>

```python
assigned_to: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsAssignedToList</a>

---

##### `assignment_type`<sup>Required</sup> <a name="assignment_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.assignmentType"></a>

```python
assignment_type: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsMetaList</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignments</a>

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_assignments

dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowAssignments.DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags">DataOciIdentityDomainsApprovalWorkflowAssignmentsApprovalWorkflowAssignmentsTags</a>

---



