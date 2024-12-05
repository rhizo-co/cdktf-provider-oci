# `capacityManagementOccCapacityRequest` Submodule <a name="`capacityManagementOccCapacityRequest` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCapacityRequest <a name="CapacityManagementOccCapacityRequest" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  date_expected_capacity_handover: str,
  details: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetails]],
  display_name: str,
  namespace: str,
  occ_availability_catalog_id: str,
  region: str,
  availability_domain: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  lifecycle_details: str = None,
  patch_operations: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestPatchOperations]] = None,
  request_state: str = None,
  request_type: str = None,
  timeouts: CapacityManagementOccCapacityRequestTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.details">details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]</code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.patchOperations">patch_operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.requestState">request_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.requestType">request_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}.

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.dateExpectedCapacityHandover"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}.

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.details"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#details CapacityManagementOccCapacityRequest#details}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}.

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.occAvailabilityCatalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_details`<sup>Optional</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.lifecycleDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}.

---

##### `patch_operations`<sup>Optional</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.patchOperations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#patch_operations CapacityManagementOccCapacityRequest#patch_operations}

---

##### `request_state`<sup>Optional</sup> <a name="request_state" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.requestState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}.

---

##### `request_type`<sup>Optional</sup> <a name="request_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.requestType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#timeouts CapacityManagementOccCapacityRequest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails">put_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations">put_patch_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetLifecycleDetails">reset_lifecycle_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetPatchOperations">reset_patch_operations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestState">reset_request_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestType">reset_request_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_details` <a name="put_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails"></a>

```python
def put_details(
  value: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]

---

##### `put_patch_operations` <a name="put_patch_operations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations"></a>

```python
def put_patch_operations(
  value: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestPatchOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}.

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_details` <a name="reset_lifecycle_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetLifecycleDetails"></a>

```python
def reset_lifecycle_details() -> None
```

##### `reset_patch_operations` <a name="reset_patch_operations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetPatchOperations"></a>

```python
def reset_patch_operations() -> None
```

##### `reset_request_state` <a name="reset_request_state" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestState"></a>

```python
def reset_request_state() -> None
```

##### `reset_request_type` <a name="reset_request_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestType"></a>

```python
def reset_request_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CapacityManagementOccCapacityRequest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CapacityManagementOccCapacityRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCapacityRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList">CapacityManagementOccCapacityRequestDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperations">patch_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList">CapacityManagementOccCapacityRequestPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference">CapacityManagementOccCapacityRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandoverInput">date_expected_capacity_handover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.detailsInput">details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetailsInput">lifecycle_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogIdInput">occ_availability_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperationsInput">patch_operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestStateInput">request_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestTypeInput">request_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestState">request_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.details"></a>

```python
details: CapacityManagementOccCapacityRequestDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList">CapacityManagementOccCapacityRequestDetailsList</a>

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `patch_operations`<sup>Required</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperations"></a>

```python
patch_operations: CapacityManagementOccCapacityRequestPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList">CapacityManagementOccCapacityRequestPatchOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeouts"></a>

```python
timeouts: CapacityManagementOccCapacityRequestTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference">CapacityManagementOccCapacityRequestTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `date_expected_capacity_handover_input`<sup>Optional</sup> <a name="date_expected_capacity_handover_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandoverInput"></a>

```python
date_expected_capacity_handover_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.detailsInput"></a>

```python
details_input: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_details_input`<sup>Optional</sup> <a name="lifecycle_details_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetailsInput"></a>

```python
lifecycle_details_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `occ_availability_catalog_id_input`<sup>Optional</sup> <a name="occ_availability_catalog_id_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogIdInput"></a>

```python
occ_availability_catalog_id_input: str
```

- *Type:* str

---

##### `patch_operations_input`<sup>Optional</sup> <a name="patch_operations_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperationsInput"></a>

```python
patch_operations_input: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `request_state_input`<sup>Optional</sup> <a name="request_state_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestStateInput"></a>

```python
request_state_input: str
```

- *Type:* str

---

##### `request_type_input`<sup>Optional</sup> <a name="request_type_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestTypeInput"></a>

```python
request_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CapacityManagementOccCapacityRequestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `request_state`<sup>Required</sup> <a name="request_state" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestState"></a>

```python
request_state: str
```

- *Type:* str

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCapacityRequestConfig <a name="CapacityManagementOccCapacityRequestConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  date_expected_capacity_handover: str,
  details: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetails]],
  display_name: str,
  namespace: str,
  occ_availability_catalog_id: str,
  region: str,
  availability_domain: str = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  lifecycle_details: str = None,
  patch_operations: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestPatchOperations]] = None,
  request_state: str = None,
  request_type: str = None,
  timeouts: CapacityManagementOccCapacityRequestTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.details">details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]</code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.patchOperations">patch_operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestState">request_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestType">request_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}.

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}.

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.details"></a>

```python
details: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#details CapacityManagementOccCapacityRequest#details}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}.

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_details`<sup>Optional</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}.

---

##### `patch_operations`<sup>Optional</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.patchOperations"></a>

```python
patch_operations: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#patch_operations CapacityManagementOccCapacityRequest#patch_operations}

---

##### `request_state`<sup>Optional</sup> <a name="request_state" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestState"></a>

```python
request_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}.

---

##### `request_type`<sup>Optional</sup> <a name="request_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.timeouts"></a>

```python
timeouts: CapacityManagementOccCapacityRequestTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#timeouts CapacityManagementOccCapacityRequest#timeouts}

---

### CapacityManagementOccCapacityRequestDetails <a name="CapacityManagementOccCapacityRequestDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails(
  demand_quantity: str,
  resource_name: str,
  resource_type: str,
  workload_type: str,
  actual_handover_quantity: str = None,
  associated_occ_handover_resource_block_list: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct]] = None,
  availability_domain: str = None,
  date_actual_handover: str = None,
  date_expected_handover: str = None,
  expected_handover_quantity: str = None,
  source_workload_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.demandQuantity">demand_quantity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.actualHandoverQuantity">actual_handover_quantity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.associatedOccHandoverResourceBlockList">associated_occ_handover_resource_block_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]]</code> | associated_occ_handover_resource_block_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateActualHandover">date_actual_handover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateExpectedHandover">date_expected_handover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.expectedHandoverQuantity">expected_handover_quantity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.sourceWorkloadType">source_workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}. |

---

##### `demand_quantity`<sup>Required</sup> <a name="demand_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.demandQuantity"></a>

```python
demand_quantity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}.

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}.

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}.

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}.

---

##### `actual_handover_quantity`<sup>Optional</sup> <a name="actual_handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.actualHandoverQuantity"></a>

```python
actual_handover_quantity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}.

---

##### `associated_occ_handover_resource_block_list`<sup>Optional</sup> <a name="associated_occ_handover_resource_block_list" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.associatedOccHandoverResourceBlockList"></a>

```python
associated_occ_handover_resource_block_list: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]]

associated_occ_handover_resource_block_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#associated_occ_handover_resource_block_list CapacityManagementOccCapacityRequest#associated_occ_handover_resource_block_list}

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `date_actual_handover`<sup>Optional</sup> <a name="date_actual_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateActualHandover"></a>

```python
date_actual_handover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}.

---

##### `date_expected_handover`<sup>Optional</sup> <a name="date_expected_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateExpectedHandover"></a>

```python
date_expected_handover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}.

---

##### `expected_handover_quantity`<sup>Optional</sup> <a name="expected_handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.expectedHandoverQuantity"></a>

```python
expected_handover_quantity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}.

---

##### `source_workload_type`<sup>Optional</sup> <a name="source_workload_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.sourceWorkloadType"></a>

```python
source_workload_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}.

---

### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct(
  handover_quantity: str = None,
  occ_handover_resource_block_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.handoverQuantity">handover_quantity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}. |

---

##### `handover_quantity`<sup>Optional</sup> <a name="handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.handoverQuantity"></a>

```python
handover_quantity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}.

---

##### `occ_handover_resource_block_id`<sup>Optional</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}.

---

### CapacityManagementOccCapacityRequestPatchOperations <a name="CapacityManagementOccCapacityRequestPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations(
  from: str,
  operation: str,
  selection: str,
  value: typing.Mapping[str],
  position: str = None,
  selected_item: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.from">from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selection">selection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.value">value</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.position">position</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selectedItem">selected_item</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}. |

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.from"></a>

```python
from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}.

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selection"></a>

```python
selection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.value"></a>

```python
value: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.position"></a>

```python
position: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}.

---

##### `selected_item`<sup>Optional</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}.

---

### CapacityManagementOccCapacityRequestTimeouts <a name="CapacityManagementOccCapacityRequestTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]]

---


### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetHandoverQuantity">reset_handover_quantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetOccHandoverResourceBlockId">reset_occ_handover_resource_block_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_handover_quantity` <a name="reset_handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetHandoverQuantity"></a>

```python
def reset_handover_quantity() -> None
```

##### `reset_occ_handover_resource_block_id` <a name="reset_occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetOccHandoverResourceBlockId"></a>

```python
def reset_occ_handover_resource_block_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantityInput">handover_quantity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockIdInput">occ_handover_resource_block_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `handover_quantity_input`<sup>Optional</sup> <a name="handover_quantity_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantityInput"></a>

```python
handover_quantity_input: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id_input`<sup>Optional</sup> <a name="occ_handover_resource_block_id_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockIdInput"></a>

```python
occ_handover_resource_block_id_input: str
```

- *Type:* str

---

##### `handover_quantity`<sup>Required</sup> <a name="handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```python
handover_quantity: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]

---


### CapacityManagementOccCapacityRequestDetailsList <a name="CapacityManagementOccCapacityRequestDetailsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CapacityManagementOccCapacityRequestDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]]

---


### CapacityManagementOccCapacityRequestDetailsOutputReference <a name="CapacityManagementOccCapacityRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList">put_associated_occ_handover_resource_block_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetActualHandoverQuantity">reset_actual_handover_quantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAssociatedOccHandoverResourceBlockList">reset_associated_occ_handover_resource_block_list</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateActualHandover">reset_date_actual_handover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateExpectedHandover">reset_date_expected_handover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetExpectedHandoverQuantity">reset_expected_handover_quantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetSourceWorkloadType">reset_source_workload_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_associated_occ_handover_resource_block_list` <a name="put_associated_occ_handover_resource_block_list" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList"></a>

```python
def put_associated_occ_handover_resource_block_list(
  value: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]]

---

##### `reset_actual_handover_quantity` <a name="reset_actual_handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetActualHandoverQuantity"></a>

```python
def reset_actual_handover_quantity() -> None
```

##### `reset_associated_occ_handover_resource_block_list` <a name="reset_associated_occ_handover_resource_block_list" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAssociatedOccHandoverResourceBlockList"></a>

```python
def reset_associated_occ_handover_resource_block_list() -> None
```

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_date_actual_handover` <a name="reset_date_actual_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateActualHandover"></a>

```python
def reset_date_actual_handover() -> None
```

##### `reset_date_expected_handover` <a name="reset_date_expected_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateExpectedHandover"></a>

```python
def reset_date_expected_handover() -> None
```

##### `reset_expected_handover_quantity` <a name="reset_expected_handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetExpectedHandoverQuantity"></a>

```python
def reset_expected_handover_quantity() -> None
```

##### `reset_source_workload_type` <a name="reset_source_workload_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetSourceWorkloadType"></a>

```python
def reset_source_workload_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList">associated_occ_handover_resource_block_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantityInput">actual_handover_quantity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockListInput">associated_occ_handover_resource_block_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandoverInput">date_actual_handover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandoverInput">date_expected_handover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantityInput">demand_quantity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantityInput">expected_handover_quantity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadTypeInput">source_workload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadTypeInput">workload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity">actual_handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover">date_actual_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover">date_expected_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity">demand_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity">expected_handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType">source_workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associated_occ_handover_resource_block_list`<sup>Required</sup> <a name="associated_occ_handover_resource_block_list" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```python
associated_occ_handover_resource_block_list: CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `actual_handover_quantity_input`<sup>Optional</sup> <a name="actual_handover_quantity_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantityInput"></a>

```python
actual_handover_quantity_input: str
```

- *Type:* str

---

##### `associated_occ_handover_resource_block_list_input`<sup>Optional</sup> <a name="associated_occ_handover_resource_block_list_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockListInput"></a>

```python
associated_occ_handover_resource_block_list_input: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>]]

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `date_actual_handover_input`<sup>Optional</sup> <a name="date_actual_handover_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandoverInput"></a>

```python
date_actual_handover_input: str
```

- *Type:* str

---

##### `date_expected_handover_input`<sup>Optional</sup> <a name="date_expected_handover_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandoverInput"></a>

```python
date_expected_handover_input: str
```

- *Type:* str

---

##### `demand_quantity_input`<sup>Optional</sup> <a name="demand_quantity_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantityInput"></a>

```python
demand_quantity_input: str
```

- *Type:* str

---

##### `expected_handover_quantity_input`<sup>Optional</sup> <a name="expected_handover_quantity_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantityInput"></a>

```python
expected_handover_quantity_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `source_workload_type_input`<sup>Optional</sup> <a name="source_workload_type_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadTypeInput"></a>

```python
source_workload_type_input: str
```

- *Type:* str

---

##### `workload_type_input`<sup>Optional</sup> <a name="workload_type_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadTypeInput"></a>

```python
workload_type_input: str
```

- *Type:* str

---

##### `actual_handover_quantity`<sup>Required</sup> <a name="actual_handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity"></a>

```python
actual_handover_quantity: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `date_actual_handover`<sup>Required</sup> <a name="date_actual_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover"></a>

```python
date_actual_handover: str
```

- *Type:* str

---

##### `date_expected_handover`<sup>Required</sup> <a name="date_expected_handover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover"></a>

```python
date_expected_handover: str
```

- *Type:* str

---

##### `demand_quantity`<sup>Required</sup> <a name="demand_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity"></a>

```python
demand_quantity: str
```

- *Type:* str

---

##### `expected_handover_quantity`<sup>Required</sup> <a name="expected_handover_quantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity"></a>

```python
expected_handover_quantity: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `source_workload_type`<sup>Required</sup> <a name="source_workload_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType"></a>

```python
source_workload_type: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CapacityManagementOccCapacityRequestDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>]

---


### CapacityManagementOccCapacityRequestPatchOperationsList <a name="CapacityManagementOccCapacityRequestPatchOperationsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CapacityManagementOccCapacityRequestPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CapacityManagementOccCapacityRequestPatchOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]]

---


### CapacityManagementOccCapacityRequestPatchOperationsOutputReference <a name="CapacityManagementOccCapacityRequestPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetPosition">reset_position</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetSelectedItem">reset_selected_item</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_position` <a name="reset_position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetPosition"></a>

```python
def reset_position() -> None
```

##### `reset_selected_item` <a name="reset_selected_item" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetSelectedItem"></a>

```python
def reset_selected_item() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fromInput">from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.positionInput">position_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItemInput">selected_item_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectionInput">selection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.valueInput">value_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem">selected_item</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection">selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value">value</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fromInput"></a>

```python
from_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.positionInput"></a>

```python
position_input: str
```

- *Type:* str

---

##### `selected_item_input`<sup>Optional</sup> <a name="selected_item_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItemInput"></a>

```python
selected_item_input: str
```

- *Type:* str

---

##### `selection_input`<sup>Optional</sup> <a name="selection_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectionInput"></a>

```python
selection_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.valueInput"></a>

```python
value_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `selected_item`<sup>Required</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection"></a>

```python
selection: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value"></a>

```python
value: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CapacityManagementOccCapacityRequestPatchOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>]

---


### CapacityManagementOccCapacityRequestTimeoutsOutputReference <a name="CapacityManagementOccCapacityRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import capacity_management_occ_capacity_request

capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CapacityManagementOccCapacityRequestTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>]

---



