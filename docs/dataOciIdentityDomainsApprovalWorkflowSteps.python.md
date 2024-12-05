# `dataOciIdentityDomainsApprovalWorkflowSteps` Submodule <a name="`dataOciIdentityDomainsApprovalWorkflowSteps` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityDomainsApprovalWorkflowSteps <a name="DataOciIdentityDomainsApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps oci_identity_domains_approval_workflow_steps}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps(
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
  approval_workflow_step_count: typing.Union[int, float] = None,
  approval_workflow_step_filter: str = None,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowSteps#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.approvalWorkflowStepCount">approval_workflow_step_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_count DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.approvalWorkflowStepFilter">approval_workflow_step_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_filter DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attributes DataOciIdentityDomainsApprovalWorkflowSteps#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attribute_sets DataOciIdentityDomainsApprovalWorkflowSteps#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#authorization DataOciIdentityDomainsApprovalWorkflowSteps#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#compartment_id DataOciIdentityDomainsApprovalWorkflowSteps#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#id DataOciIdentityDomainsApprovalWorkflowSteps#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowSteps#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_by DataOciIdentityDomainsApprovalWorkflowSteps#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_order DataOciIdentityDomainsApprovalWorkflowSteps#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#start_index DataOciIdentityDomainsApprovalWorkflowSteps#start_index}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.idcsEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowSteps#idcs_endpoint}.

---

##### `approval_workflow_step_count`<sup>Optional</sup> <a name="approval_workflow_step_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.approvalWorkflowStepCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_count DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_count}.

---

##### `approval_workflow_step_filter`<sup>Optional</sup> <a name="approval_workflow_step_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.approvalWorkflowStepFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_filter DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.attributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attributes DataOciIdentityDomainsApprovalWorkflowSteps#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.attributeSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attribute_sets DataOciIdentityDomainsApprovalWorkflowSteps#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#authorization DataOciIdentityDomainsApprovalWorkflowSteps#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#compartment_id DataOciIdentityDomainsApprovalWorkflowSteps#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#id DataOciIdentityDomainsApprovalWorkflowSteps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.resourceTypeSchemaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowSteps#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.sortBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_by DataOciIdentityDomainsApprovalWorkflowSteps#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.sortOrder"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_order DataOciIdentityDomainsApprovalWorkflowSteps#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.Initializer.parameter.startIndex"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#start_index DataOciIdentityDomainsApprovalWorkflowSteps#start_index}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepCount">reset_approval_workflow_step_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepFilter">reset_approval_workflow_step_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributeSets">reset_attribute_sets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetResourceTypeSchemaVersion">reset_resource_type_schema_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortBy">reset_sort_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortOrder">reset_sort_order</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetStartIndex">reset_start_index</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_approval_workflow_step_count` <a name="reset_approval_workflow_step_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepCount"></a>

```python
def reset_approval_workflow_step_count() -> None
```

##### `reset_approval_workflow_step_filter` <a name="reset_approval_workflow_step_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetApprovalWorkflowStepFilter"></a>

```python
def reset_approval_workflow_step_filter() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_attribute_sets` <a name="reset_attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAttributeSets"></a>

```python
def reset_attribute_sets() -> None
```

##### `reset_authorization` <a name="reset_authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_type_schema_version` <a name="reset_resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetResourceTypeSchemaVersion"></a>

```python
def reset_resource_type_schema_version() -> None
```

##### `reset_sort_by` <a name="reset_sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortBy"></a>

```python
def reset_sort_by() -> None
```

##### `reset_sort_order` <a name="reset_sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetSortOrder"></a>

```python
def reset_sort_order() -> None
```

##### `reset_start_index` <a name="reset_start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.resetStartIndex"></a>

```python
def reset_start_index() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowSteps resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityDomainsApprovalWorkflowSteps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityDomainsApprovalWorkflowSteps to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityDomainsApprovalWorkflowSteps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityDomainsApprovalWorkflowSteps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowSteps">approval_workflow_steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.itemsPerPage">items_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.totalResults">total_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCountInput">approval_workflow_step_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilterInput">approval_workflow_step_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSetsInput">attribute_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributesInput">attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpointInput">idcs_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersionInput">resource_type_schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortByInput">sort_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrderInput">sort_order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndexInput">start_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCount">approval_workflow_step_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilter">approval_workflow_step_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortBy">sort_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrder">sort_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `approval_workflow_steps`<sup>Required</sup> <a name="approval_workflow_steps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowSteps"></a>

```python
approval_workflow_steps: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList</a>

---

##### `items_per_page`<sup>Required</sup> <a name="items_per_page" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.itemsPerPage"></a>

```python
items_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `total_results`<sup>Required</sup> <a name="total_results" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.totalResults"></a>

```python
total_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_workflow_step_count_input`<sup>Optional</sup> <a name="approval_workflow_step_count_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCountInput"></a>

```python
approval_workflow_step_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_workflow_step_filter_input`<sup>Optional</sup> <a name="approval_workflow_step_filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilterInput"></a>

```python
approval_workflow_step_filter_input: str
```

- *Type:* str

---

##### `attribute_sets_input`<sup>Optional</sup> <a name="attribute_sets_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSetsInput"></a>

```python
attribute_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributesInput"></a>

```python
attributes_input: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `idcs_endpoint_input`<sup>Optional</sup> <a name="idcs_endpoint_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpointInput"></a>

```python
idcs_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_type_schema_version_input`<sup>Optional</sup> <a name="resource_type_schema_version_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersionInput"></a>

```python
resource_type_schema_version_input: str
```

- *Type:* str

---

##### `sort_by_input`<sup>Optional</sup> <a name="sort_by_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortByInput"></a>

```python
sort_by_input: str
```

- *Type:* str

---

##### `sort_order_input`<sup>Optional</sup> <a name="sort_order_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrderInput"></a>

```python
sort_order_input: str
```

- *Type:* str

---

##### `start_index_input`<sup>Optional</sup> <a name="start_index_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndexInput"></a>

```python
start_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_workflow_step_count`<sup>Required</sup> <a name="approval_workflow_step_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepCount"></a>

```python
approval_workflow_step_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `approval_workflow_step_filter`<sup>Required</sup> <a name="approval_workflow_step_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.approvalWorkflowStepFilter"></a>

```python
approval_workflow_step_filter: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `sort_by`<sup>Required</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

---

##### `sort_order`<sup>Required</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

---

##### `start_index`<sup>Required</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowSteps.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps()
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers()
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy()
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy()
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta()
```


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags()
```


### DataOciIdentityDomainsApprovalWorkflowStepsConfig <a name="DataOciIdentityDomainsApprovalWorkflowStepsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idcs_endpoint: str,
  approval_workflow_step_count: typing.Union[int, float] = None,
  approval_workflow_step_filter: str = None,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowSteps#idcs_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepCount">approval_workflow_step_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_count DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepFilter">approval_workflow_step_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_filter DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributes">attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attributes DataOciIdentityDomainsApprovalWorkflowSteps#attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attribute_sets DataOciIdentityDomainsApprovalWorkflowSteps#attribute_sets}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#authorization DataOciIdentityDomainsApprovalWorkflowSteps#authorization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#compartment_id DataOciIdentityDomainsApprovalWorkflowSteps#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#id DataOciIdentityDomainsApprovalWorkflowSteps#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowSteps#resource_type_schema_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortBy">sort_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_by DataOciIdentityDomainsApprovalWorkflowSteps#sort_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortOrder">sort_order</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_order DataOciIdentityDomainsApprovalWorkflowSteps#sort_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.startIndex">start_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#start_index DataOciIdentityDomainsApprovalWorkflowSteps#start_index}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#idcs_endpoint DataOciIdentityDomainsApprovalWorkflowSteps#idcs_endpoint}.

---

##### `approval_workflow_step_count`<sup>Optional</sup> <a name="approval_workflow_step_count" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepCount"></a>

```python
approval_workflow_step_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_count DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_count}.

---

##### `approval_workflow_step_filter`<sup>Optional</sup> <a name="approval_workflow_step_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.approvalWorkflowStepFilter"></a>

```python
approval_workflow_step_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#approval_workflow_step_filter DataOciIdentityDomainsApprovalWorkflowSteps#approval_workflow_step_filter}.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attributes DataOciIdentityDomainsApprovalWorkflowSteps#attributes}.

---

##### `attribute_sets`<sup>Optional</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#attribute_sets DataOciIdentityDomainsApprovalWorkflowSteps#attribute_sets}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#authorization DataOciIdentityDomainsApprovalWorkflowSteps#authorization}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#compartment_id DataOciIdentityDomainsApprovalWorkflowSteps#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#id DataOciIdentityDomainsApprovalWorkflowSteps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_type_schema_version`<sup>Optional</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#resource_type_schema_version DataOciIdentityDomainsApprovalWorkflowSteps#resource_type_schema_version}.

---

##### `sort_by`<sup>Optional</sup> <a name="sort_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortBy"></a>

```python
sort_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_by DataOciIdentityDomainsApprovalWorkflowSteps#sort_by}.

---

##### `sort_order`<sup>Optional</sup> <a name="sort_order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.sortOrder"></a>

```python
sort_order: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#sort_order DataOciIdentityDomainsApprovalWorkflowSteps#sort_order}.

---

##### `start_index`<sup>Optional</sup> <a name="start_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsConfig.property.startIndex"></a>

```python
start_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_domains_approval_workflow_steps#start_index DataOciIdentityDomainsApprovalWorkflowSteps#start_index}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApprovers</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ref">ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `ref`<sup>Required</sup> <a name="ref" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.ref"></a>

```python
ref: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedBy</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMeta</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approvers">approvers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approversExpressions">approvers_expressions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributeSets">attribute_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.compartmentOcid">compartment_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.deleteInProgress">delete_in_progress</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.domainOcid">domain_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsCreatedBy">idcs_created_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsEndpoint">idcs_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastModifiedBy">idcs_last_modified_by</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastUpgradedInRelease">idcs_last_upgraded_in_release</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsPreventedOperations">idcs_prevented_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.meta">meta</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.minimumApprovals">minimum_approvals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.ocid">ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.resourceTypeSchemaVersion">resource_type_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.schemas">schemas</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tenancyOcid">tenancy_ocid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approvers`<sup>Required</sup> <a name="approvers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approvers"></a>

```python
approvers: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsApproversList</a>

---

##### `approvers_expressions`<sup>Required</sup> <a name="approvers_expressions" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.approversExpressions"></a>

```python
approvers_expressions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `attribute_sets`<sup>Required</sup> <a name="attribute_sets" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.attributeSets"></a>

```python
attribute_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `compartment_ocid`<sup>Required</sup> <a name="compartment_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.compartmentOcid"></a>

```python
compartment_ocid: str
```

- *Type:* str

---

##### `delete_in_progress`<sup>Required</sup> <a name="delete_in_progress" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.deleteInProgress"></a>

```python
delete_in_progress: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `domain_ocid`<sup>Required</sup> <a name="domain_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.domainOcid"></a>

```python
domain_ocid: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_created_by`<sup>Required</sup> <a name="idcs_created_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsCreatedBy"></a>

```python
idcs_created_by: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsCreatedByList</a>

---

##### `idcs_endpoint`<sup>Required</sup> <a name="idcs_endpoint" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsEndpoint"></a>

```python
idcs_endpoint: str
```

- *Type:* str

---

##### `idcs_last_modified_by`<sup>Required</sup> <a name="idcs_last_modified_by" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastModifiedBy"></a>

```python
idcs_last_modified_by: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsIdcsLastModifiedByList</a>

---

##### `idcs_last_upgraded_in_release`<sup>Required</sup> <a name="idcs_last_upgraded_in_release" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsLastUpgradedInRelease"></a>

```python
idcs_last_upgraded_in_release: str
```

- *Type:* str

---

##### `idcs_prevented_operations`<sup>Required</sup> <a name="idcs_prevented_operations" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.idcsPreventedOperations"></a>

```python
idcs_prevented_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `meta`<sup>Required</sup> <a name="meta" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.meta"></a>

```python
meta: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsMetaList</a>

---

##### `minimum_approvals`<sup>Required</sup> <a name="minimum_approvals" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.minimumApprovals"></a>

```python
minimum_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.ocid"></a>

```python
ocid: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_type_schema_version`<sup>Required</sup> <a name="resource_type_schema_version" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.resourceTypeSchemaVersion"></a>

```python
resource_type_schema_version: str
```

- *Type:* str

---

##### `schemas`<sup>Required</sup> <a name="schemas" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.schemas"></a>

```python
schemas: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tags"></a>

```python
tags: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList</a>

---

##### `tenancy_ocid`<sup>Required</sup> <a name="tenancy_ocid" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.tenancyOcid"></a>

```python
tenancy_ocid: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowSteps</a>

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference <a name="DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_domains_approval_workflow_steps

dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityDomainsApprovalWorkflowSteps.DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags">DataOciIdentityDomainsApprovalWorkflowStepsApprovalWorkflowStepsTags</a>

---



