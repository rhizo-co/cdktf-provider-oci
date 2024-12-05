# `capacityManagementOccCapacityRequest` Submodule <a name="`capacityManagementOccCapacityRequest` Submodule" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CapacityManagementOccCapacityRequest <a name="CapacityManagementOccCapacityRequest" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequest;

CapacityManagementOccCapacityRequest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .dateExpectedCapacityHandover(java.lang.String)
    .details(IResolvable)
    .details(java.util.List<CapacityManagementOccCapacityRequestDetails>)
    .displayName(java.lang.String)
    .namespace(java.lang.String)
    .occAvailabilityCatalogId(java.lang.String)
    .region(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .lifecycleDetails(java.lang.String)
//  .patchOperations(IResolvable)
//  .patchOperations(java.util.List<CapacityManagementOccCapacityRequestPatchOperations>)
//  .requestState(java.lang.String)
//  .requestType(java.lang.String)
//  .timeouts(CapacityManagementOccCapacityRequestTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.details">details</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.patchOperations">patchOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>></code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.requestState">requestState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.requestType">requestType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}.

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.dateExpectedCapacityHandover"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}.

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.details"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#details CapacityManagementOccCapacityRequest#details}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}.

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.occAvailabilityCatalogId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleDetails`<sup>Optional</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.lifecycleDetails"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}.

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.patchOperations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>>

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#patch_operations CapacityManagementOccCapacityRequest#patch_operations}

---

##### `requestState`<sup>Optional</sup> <a name="requestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.requestState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}.

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.Initializer.parameter.requestType"></a>

- *Type:* java.lang.String

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
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations">putPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetLifecycleDetails">resetLifecycleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetPatchOperations">resetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestState">resetRequestState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestType">resetRequestType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails"></a>

```java
public void putDetails(IResolvable OR java.util.List<CapacityManagementOccCapacityRequestDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>>

---

##### `putPatchOperations` <a name="putPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations"></a>

```java
public void putPatchOperations(IResolvable OR java.util.List<CapacityManagementOccCapacityRequestPatchOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putPatchOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts"></a>

```java
public void putTimeouts(CapacityManagementOccCapacityRequestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetId"></a>

```java
public void resetId()
```

##### `resetLifecycleDetails` <a name="resetLifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetLifecycleDetails"></a>

```java
public void resetLifecycleDetails()
```

##### `resetPatchOperations` <a name="resetPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetPatchOperations"></a>

```java
public void resetPatchOperations()
```

##### `resetRequestState` <a name="resetRequestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestState"></a>

```java
public void resetRequestState()
```

##### `resetRequestType` <a name="resetRequestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetRequestType"></a>

```java
public void resetRequestType()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequest;

CapacityManagementOccCapacityRequest.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequest;

CapacityManagementOccCapacityRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequest;

CapacityManagementOccCapacityRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequest;

CapacityManagementOccCapacityRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CapacityManagementOccCapacityRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CapacityManagementOccCapacityRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CapacityManagementOccCapacityRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CapacityManagementOccCapacityRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList">CapacityManagementOccCapacityRequestDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperations">patchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList">CapacityManagementOccCapacityRequestPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference">CapacityManagementOccCapacityRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandoverInput">dateExpectedCapacityHandoverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.detailsInput">detailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetailsInput">lifecycleDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogIdInput">occAvailabilityCatalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperationsInput">patchOperationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestStateInput">requestStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestTypeInput">requestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestState">requestState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestType">requestType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.details"></a>

```java
public CapacityManagementOccCapacityRequestDetailsList getDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList">CapacityManagementOccCapacityRequestDetailsList</a>

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occCustomerGroupId"></a>

```java
public java.lang.String getOccCustomerGroupId();
```

- *Type:* java.lang.String

---

##### `patchOperations`<sup>Required</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperations"></a>

```java
public CapacityManagementOccCapacityRequestPatchOperationsList getPatchOperations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList">CapacityManagementOccCapacityRequestPatchOperationsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeouts"></a>

```java
public CapacityManagementOccCapacityRequestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference">CapacityManagementOccCapacityRequestTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dateExpectedCapacityHandoverInput`<sup>Optional</sup> <a name="dateExpectedCapacityHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandoverInput"></a>

```java
public java.lang.String getDateExpectedCapacityHandoverInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.detailsInput"></a>

```java
public java.lang.Object getDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lifecycleDetailsInput`<sup>Optional</sup> <a name="lifecycleDetailsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetailsInput"></a>

```java
public java.lang.String getLifecycleDetailsInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `occAvailabilityCatalogIdInput`<sup>Optional</sup> <a name="occAvailabilityCatalogIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogIdInput"></a>

```java
public java.lang.String getOccAvailabilityCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `patchOperationsInput`<sup>Optional</sup> <a name="patchOperationsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.patchOperationsInput"></a>

```java
public java.lang.Object getPatchOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `requestStateInput`<sup>Optional</sup> <a name="requestStateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestStateInput"></a>

```java
public java.lang.String getRequestStateInput();
```

- *Type:* java.lang.String

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestTypeInput"></a>

```java
public java.lang.String getRequestTypeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover"></a>

```java
public java.lang.String getDateExpectedCapacityHandover();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId"></a>

```java
public java.lang.String getOccAvailabilityCatalogId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `requestState`<sup>Required</sup> <a name="requestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestState"></a>

```java
public java.lang.String getRequestState();
```

- *Type:* java.lang.String

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CapacityManagementOccCapacityRequestConfig <a name="CapacityManagementOccCapacityRequestConfig" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestConfig;

CapacityManagementOccCapacityRequestConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .compartmentId(java.lang.String)
    .dateExpectedCapacityHandover(java.lang.String)
    .details(IResolvable)
    .details(java.util.List<CapacityManagementOccCapacityRequestDetails>)
    .displayName(java.lang.String)
    .namespace(java.lang.String)
    .occAvailabilityCatalogId(java.lang.String)
    .region(java.lang.String)
//  .availabilityDomain(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .lifecycleDetails(java.lang.String)
//  .patchOperations(IResolvable)
//  .patchOperations(java.util.List<CapacityManagementOccCapacityRequestPatchOperations>)
//  .requestState(java.lang.String)
//  .requestType(java.lang.String)
//  .timeouts(CapacityManagementOccCapacityRequestTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.details">details</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>></code> | details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.occAvailabilityCatalogId">occAvailabilityCatalogId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.patchOperations">patchOperations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>></code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestState">requestState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestType">requestType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#compartment_id CapacityManagementOccCapacityRequest#compartment_id}.

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.dateExpectedCapacityHandover"></a>

```java
public java.lang.String getDateExpectedCapacityHandover();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_capacity_handover CapacityManagementOccCapacityRequest#date_expected_capacity_handover}.

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.details"></a>

```java
public java.lang.Object getDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#details CapacityManagementOccCapacityRequest#details}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#display_name CapacityManagementOccCapacityRequest#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#namespace CapacityManagementOccCapacityRequest#namespace}.

---

##### `occAvailabilityCatalogId`<sup>Required</sup> <a name="occAvailabilityCatalogId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.occAvailabilityCatalogId"></a>

```java
public java.lang.String getOccAvailabilityCatalogId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_availability_catalog_id CapacityManagementOccCapacityRequest#occ_availability_catalog_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#region CapacityManagementOccCapacityRequest#region}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#defined_tags CapacityManagementOccCapacityRequest#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#description CapacityManagementOccCapacityRequest#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#freeform_tags CapacityManagementOccCapacityRequest#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#id CapacityManagementOccCapacityRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleDetails`<sup>Optional</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#lifecycle_details CapacityManagementOccCapacityRequest#lifecycle_details}.

---

##### `patchOperations`<sup>Optional</sup> <a name="patchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.patchOperations"></a>

```java
public java.lang.Object getPatchOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>>

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#patch_operations CapacityManagementOccCapacityRequest#patch_operations}

---

##### `requestState`<sup>Optional</sup> <a name="requestState" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestState"></a>

```java
public java.lang.String getRequestState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_state CapacityManagementOccCapacityRequest#request_state}.

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#request_type CapacityManagementOccCapacityRequest#request_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestConfig.property.timeouts"></a>

```java
public CapacityManagementOccCapacityRequestTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#timeouts CapacityManagementOccCapacityRequest#timeouts}

---

### CapacityManagementOccCapacityRequestDetails <a name="CapacityManagementOccCapacityRequestDetails" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestDetails;

CapacityManagementOccCapacityRequestDetails.builder()
    .demandQuantity(java.lang.String)
    .resourceName(java.lang.String)
    .resourceType(java.lang.String)
    .workloadType(java.lang.String)
//  .actualHandoverQuantity(java.lang.String)
//  .associatedOccHandoverResourceBlockList(IResolvable)
//  .associatedOccHandoverResourceBlockList(java.util.List<CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct>)
//  .availabilityDomain(java.lang.String)
//  .dateActualHandover(java.lang.String)
//  .dateExpectedHandover(java.lang.String)
//  .expectedHandoverQuantity(java.lang.String)
//  .sourceWorkloadType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.demandQuantity">demandQuantity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.actualHandoverQuantity">actualHandoverQuantity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.associatedOccHandoverResourceBlockList">associatedOccHandoverResourceBlockList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>></code> | associated_occ_handover_resource_block_list block. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateActualHandover">dateActualHandover</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateExpectedHandover">dateExpectedHandover</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.expectedHandoverQuantity">expectedHandoverQuantity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.sourceWorkloadType">sourceWorkloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}. |

---

##### `demandQuantity`<sup>Required</sup> <a name="demandQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.demandQuantity"></a>

```java
public java.lang.String getDemandQuantity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#demand_quantity CapacityManagementOccCapacityRequest#demand_quantity}.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_name CapacityManagementOccCapacityRequest#resource_name}.

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#resource_type CapacityManagementOccCapacityRequest#resource_type}.

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#workload_type CapacityManagementOccCapacityRequest#workload_type}.

---

##### `actualHandoverQuantity`<sup>Optional</sup> <a name="actualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.actualHandoverQuantity"></a>

```java
public java.lang.String getActualHandoverQuantity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#actual_handover_quantity CapacityManagementOccCapacityRequest#actual_handover_quantity}.

---

##### `associatedOccHandoverResourceBlockList`<sup>Optional</sup> <a name="associatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.associatedOccHandoverResourceBlockList"></a>

```java
public java.lang.Object getAssociatedOccHandoverResourceBlockList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>>

associated_occ_handover_resource_block_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#associated_occ_handover_resource_block_list CapacityManagementOccCapacityRequest#associated_occ_handover_resource_block_list}

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#availability_domain CapacityManagementOccCapacityRequest#availability_domain}.

---

##### `dateActualHandover`<sup>Optional</sup> <a name="dateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateActualHandover"></a>

```java
public java.lang.String getDateActualHandover();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_actual_handover CapacityManagementOccCapacityRequest#date_actual_handover}.

---

##### `dateExpectedHandover`<sup>Optional</sup> <a name="dateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.dateExpectedHandover"></a>

```java
public java.lang.String getDateExpectedHandover();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#date_expected_handover CapacityManagementOccCapacityRequest#date_expected_handover}.

---

##### `expectedHandoverQuantity`<sup>Optional</sup> <a name="expectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.expectedHandoverQuantity"></a>

```java
public java.lang.String getExpectedHandoverQuantity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#expected_handover_quantity CapacityManagementOccCapacityRequest#expected_handover_quantity}.

---

##### `sourceWorkloadType`<sup>Optional</sup> <a name="sourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails.property.sourceWorkloadType"></a>

```java
public java.lang.String getSourceWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#source_workload_type CapacityManagementOccCapacityRequest#source_workload_type}.

---

### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct;

CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.builder()
//  .handoverQuantity(java.lang.String)
//  .occHandoverResourceBlockId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.handoverQuantity">handoverQuantity</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}. |

---

##### `handoverQuantity`<sup>Optional</sup> <a name="handoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.handoverQuantity"></a>

```java
public java.lang.String getHandoverQuantity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#handover_quantity CapacityManagementOccCapacityRequest#handover_quantity}.

---

##### `occHandoverResourceBlockId`<sup>Optional</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.property.occHandoverResourceBlockId"></a>

```java
public java.lang.String getOccHandoverResourceBlockId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#occ_handover_resource_block_id CapacityManagementOccCapacityRequest#occ_handover_resource_block_id}.

---

### CapacityManagementOccCapacityRequestPatchOperations <a name="CapacityManagementOccCapacityRequestPatchOperations" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestPatchOperations;

CapacityManagementOccCapacityRequestPatchOperations.builder()
    .from(java.lang.String)
    .operation(java.lang.String)
    .selection(java.lang.String)
    .value(java.util.Map<java.lang.String, java.lang.String>)
//  .position(java.lang.String)
//  .selectedItem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.from">from</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.operation">operation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selection">selection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.value">value</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.position">position</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selectedItem">selectedItem</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}. |

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#from CapacityManagementOccCapacityRequest#from}.

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#operation CapacityManagementOccCapacityRequest#operation}.

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selection CapacityManagementOccCapacityRequest#selection}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.value"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValue();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#value CapacityManagementOccCapacityRequest#value}.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.position"></a>

```java
public java.lang.String getPosition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#position CapacityManagementOccCapacityRequest#position}.

---

##### `selectedItem`<sup>Optional</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations.property.selectedItem"></a>

```java
public java.lang.String getSelectedItem();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#selected_item CapacityManagementOccCapacityRequest#selected_item}.

---

### CapacityManagementOccCapacityRequestTimeouts <a name="CapacityManagementOccCapacityRequestTimeouts" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestTimeouts;

CapacityManagementOccCapacityRequestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#create CapacityManagementOccCapacityRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#delete CapacityManagementOccCapacityRequest#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/capacity_management_occ_capacity_request#update CapacityManagementOccCapacityRequest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList;

new CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```java
public CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>>

---


### CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference;

new CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetHandoverQuantity">resetHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetOccHandoverResourceBlockId">resetOccHandoverResourceBlockId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHandoverQuantity` <a name="resetHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetHandoverQuantity"></a>

```java
public void resetHandoverQuantity()
```

##### `resetOccHandoverResourceBlockId` <a name="resetOccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resetOccHandoverResourceBlockId"></a>

```java
public void resetOccHandoverResourceBlockId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantityInput">handoverQuantityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockIdInput">occHandoverResourceBlockIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">handoverQuantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `handoverQuantityInput`<sup>Optional</sup> <a name="handoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantityInput"></a>

```java
public java.lang.String getHandoverQuantityInput();
```

- *Type:* java.lang.String

---

##### `occHandoverResourceBlockIdInput`<sup>Optional</sup> <a name="occHandoverResourceBlockIdInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockIdInput"></a>

```java
public java.lang.String getOccHandoverResourceBlockIdInput();
```

- *Type:* java.lang.String

---

##### `handoverQuantity`<sup>Required</sup> <a name="handoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```java
public java.lang.String getHandoverQuantity();
```

- *Type:* java.lang.String

---

##### `occHandoverResourceBlockId`<sup>Required</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```java
public java.lang.String getOccHandoverResourceBlockId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### CapacityManagementOccCapacityRequestDetailsList <a name="CapacityManagementOccCapacityRequestDetailsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestDetailsList;

new CapacityManagementOccCapacityRequestDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get"></a>

```java
public CapacityManagementOccCapacityRequestDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>>

---


### CapacityManagementOccCapacityRequestDetailsOutputReference <a name="CapacityManagementOccCapacityRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestDetailsOutputReference;

new CapacityManagementOccCapacityRequestDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList">putAssociatedOccHandoverResourceBlockList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetActualHandoverQuantity">resetActualHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAssociatedOccHandoverResourceBlockList">resetAssociatedOccHandoverResourceBlockList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateActualHandover">resetDateActualHandover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateExpectedHandover">resetDateExpectedHandover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetExpectedHandoverQuantity">resetExpectedHandoverQuantity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetSourceWorkloadType">resetSourceWorkloadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssociatedOccHandoverResourceBlockList` <a name="putAssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList"></a>

```java
public void putAssociatedOccHandoverResourceBlockList(IResolvable OR java.util.List<CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.putAssociatedOccHandoverResourceBlockList.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>>

---

##### `resetActualHandoverQuantity` <a name="resetActualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetActualHandoverQuantity"></a>

```java
public void resetActualHandoverQuantity()
```

##### `resetAssociatedOccHandoverResourceBlockList` <a name="resetAssociatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAssociatedOccHandoverResourceBlockList"></a>

```java
public void resetAssociatedOccHandoverResourceBlockList()
```

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetDateActualHandover` <a name="resetDateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateActualHandover"></a>

```java
public void resetDateActualHandover()
```

##### `resetDateExpectedHandover` <a name="resetDateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetDateExpectedHandover"></a>

```java
public void resetDateExpectedHandover()
```

##### `resetExpectedHandoverQuantity` <a name="resetExpectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetExpectedHandoverQuantity"></a>

```java
public void resetExpectedHandoverQuantity()
```

##### `resetSourceWorkloadType` <a name="resetSourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.resetSourceWorkloadType"></a>

```java
public void resetSourceWorkloadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList">associatedOccHandoverResourceBlockList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantityInput">actualHandoverQuantityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockListInput">associatedOccHandoverResourceBlockListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandoverInput">dateActualHandoverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandoverInput">dateExpectedHandoverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantityInput">demandQuantityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantityInput">expectedHandoverQuantityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceNameInput">resourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadTypeInput">sourceWorkloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity">actualHandoverQuantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover">dateActualHandover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover">dateExpectedHandover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity">demandQuantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity">expectedHandoverQuantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName">resourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType">sourceWorkloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `associatedOccHandoverResourceBlockList`<sup>Required</sup> <a name="associatedOccHandoverResourceBlockList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```java
public CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList getAssociatedOccHandoverResourceBlockList();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `actualHandoverQuantityInput`<sup>Optional</sup> <a name="actualHandoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantityInput"></a>

```java
public java.lang.String getActualHandoverQuantityInput();
```

- *Type:* java.lang.String

---

##### `associatedOccHandoverResourceBlockListInput`<sup>Optional</sup> <a name="associatedOccHandoverResourceBlockListInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockListInput"></a>

```java
public java.lang.Object getAssociatedOccHandoverResourceBlockListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">CapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `dateActualHandoverInput`<sup>Optional</sup> <a name="dateActualHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandoverInput"></a>

```java
public java.lang.String getDateActualHandoverInput();
```

- *Type:* java.lang.String

---

##### `dateExpectedHandoverInput`<sup>Optional</sup> <a name="dateExpectedHandoverInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandoverInput"></a>

```java
public java.lang.String getDateExpectedHandoverInput();
```

- *Type:* java.lang.String

---

##### `demandQuantityInput`<sup>Optional</sup> <a name="demandQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantityInput"></a>

```java
public java.lang.String getDemandQuantityInput();
```

- *Type:* java.lang.String

---

##### `expectedHandoverQuantityInput`<sup>Optional</sup> <a name="expectedHandoverQuantityInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantityInput"></a>

```java
public java.lang.String getExpectedHandoverQuantityInput();
```

- *Type:* java.lang.String

---

##### `resourceNameInput`<sup>Optional</sup> <a name="resourceNameInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceNameInput"></a>

```java
public java.lang.String getResourceNameInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceWorkloadTypeInput`<sup>Optional</sup> <a name="sourceWorkloadTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadTypeInput"></a>

```java
public java.lang.String getSourceWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `actualHandoverQuantity`<sup>Required</sup> <a name="actualHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity"></a>

```java
public java.lang.String getActualHandoverQuantity();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `dateActualHandover`<sup>Required</sup> <a name="dateActualHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover"></a>

```java
public java.lang.String getDateActualHandover();
```

- *Type:* java.lang.String

---

##### `dateExpectedHandover`<sup>Required</sup> <a name="dateExpectedHandover" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover"></a>

```java
public java.lang.String getDateExpectedHandover();
```

- *Type:* java.lang.String

---

##### `demandQuantity`<sup>Required</sup> <a name="demandQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity"></a>

```java
public java.lang.String getDemandQuantity();
```

- *Type:* java.lang.String

---

##### `expectedHandoverQuantity`<sup>Required</sup> <a name="expectedHandoverQuantity" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity"></a>

```java
public java.lang.String getExpectedHandoverQuantity();
```

- *Type:* java.lang.String

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName"></a>

```java
public java.lang.String getResourceName();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `sourceWorkloadType`<sup>Required</sup> <a name="sourceWorkloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType"></a>

```java
public java.lang.String getSourceWorkloadType();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestDetails">CapacityManagementOccCapacityRequestDetails</a>

---


### CapacityManagementOccCapacityRequestPatchOperationsList <a name="CapacityManagementOccCapacityRequestPatchOperationsList" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestPatchOperationsList;

new CapacityManagementOccCapacityRequestPatchOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get"></a>

```java
public CapacityManagementOccCapacityRequestPatchOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>>

---


### CapacityManagementOccCapacityRequestPatchOperationsOutputReference <a name="CapacityManagementOccCapacityRequestPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestPatchOperationsOutputReference;

new CapacityManagementOccCapacityRequestPatchOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetSelectedItem">resetSelectedItem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPosition` <a name="resetPosition" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetPosition"></a>

```java
public void resetPosition()
```

##### `resetSelectedItem` <a name="resetSelectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.resetSelectedItem"></a>

```java
public void resetSelectedItem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.positionInput">positionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItemInput">selectedItemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectionInput">selectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position">position</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem">selectedItem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection">selection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value">value</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.positionInput"></a>

```java
public java.lang.String getPositionInput();
```

- *Type:* java.lang.String

---

##### `selectedItemInput`<sup>Optional</sup> <a name="selectedItemInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItemInput"></a>

```java
public java.lang.String getSelectedItemInput();
```

- *Type:* java.lang.String

---

##### `selectionInput`<sup>Optional</sup> <a name="selectionInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectionInput"></a>

```java
public java.lang.String getSelectionInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.valueInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position"></a>

```java
public java.lang.String getPosition();
```

- *Type:* java.lang.String

---

##### `selectedItem`<sup>Required</sup> <a name="selectedItem" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem"></a>

```java
public java.lang.String getSelectedItem();
```

- *Type:* java.lang.String

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection"></a>

```java
public java.lang.String getSelection();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValue();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestPatchOperations">CapacityManagementOccCapacityRequestPatchOperations</a>

---


### CapacityManagementOccCapacityRequestTimeoutsOutputReference <a name="CapacityManagementOccCapacityRequestTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.capacity_management_occ_capacity_request.CapacityManagementOccCapacityRequestTimeoutsOutputReference;

new CapacityManagementOccCapacityRequestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.capacityManagementOccCapacityRequest.CapacityManagementOccCapacityRequestTimeouts">CapacityManagementOccCapacityRequestTimeouts</a>

---



