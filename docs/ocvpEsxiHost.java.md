# `ocvpEsxiHost` Submodule <a name="`ocvpEsxiHost` Submodule" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpEsxiHost <a name="OcvpEsxiHost" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host oci_ocvp_esxi_host}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_esxi_host.OcvpEsxiHost;

OcvpEsxiHost.Builder.create(Construct scope, java.lang.String id)
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
//  .billingDonorHostId(java.lang.String)
//  .capacityReservationId(java.lang.String)
//  .clusterId(java.lang.String)
//  .computeAvailabilityDomain(java.lang.String)
//  .currentSku(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .esxiSoftwareVersion(java.lang.String)
//  .failedEsxiHostId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostOcpuCount(java.lang.Number)
//  .hostShapeName(java.lang.String)
//  .id(java.lang.String)
//  .nextSku(java.lang.String)
//  .nonUpgradedEsxiHostId(java.lang.String)
//  .sddcId(java.lang.String)
//  .timeouts(OcvpEsxiHostTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.billingDonorHostId">billingDonorHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.currentSku">currentSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.failedEsxiHostId">failedEsxiHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.hostOcpuCount">hostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.hostShapeName">hostShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.nextSku">nextSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.nonUpgradedEsxiHostId">nonUpgradedEsxiHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.sddcId">sddcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingDonorHostId`<sup>Optional</sup> <a name="billingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.billingDonorHostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.capacityReservationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.computeAvailabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}.

---

##### `currentSku`<sup>Optional</sup> <a name="currentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.currentSku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}.

---

##### `esxiSoftwareVersion`<sup>Optional</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.esxiSoftwareVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}.

---

##### `failedEsxiHostId`<sup>Optional</sup> <a name="failedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.failedEsxiHostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}.

---

##### `hostOcpuCount`<sup>Optional</sup> <a name="hostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.hostOcpuCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}.

---

##### `hostShapeName`<sup>Optional</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.hostShapeName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nextSku`<sup>Optional</sup> <a name="nextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.nextSku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}.

---

##### `nonUpgradedEsxiHostId`<sup>Optional</sup> <a name="nonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.nonUpgradedEsxiHostId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}.

---

##### `sddcId`<sup>Optional</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.sddcId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#timeouts OcvpEsxiHost#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId">resetBillingDonorHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId">resetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain">resetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku">resetCurrentSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion">resetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId">resetFailedEsxiHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount">resetHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName">resetHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku">resetNextSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId">resetNonUpgradedEsxiHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId">resetSddcId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts"></a>

```java
public void putTimeouts(OcvpEsxiHostTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

---

##### `resetBillingDonorHostId` <a name="resetBillingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId"></a>

```java
public void resetBillingDonorHostId()
```

##### `resetCapacityReservationId` <a name="resetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId"></a>

```java
public void resetCapacityReservationId()
```

##### `resetClusterId` <a name="resetClusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetComputeAvailabilityDomain` <a name="resetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain"></a>

```java
public void resetComputeAvailabilityDomain()
```

##### `resetCurrentSku` <a name="resetCurrentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku"></a>

```java
public void resetCurrentSku()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEsxiSoftwareVersion` <a name="resetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion"></a>

```java
public void resetEsxiSoftwareVersion()
```

##### `resetFailedEsxiHostId` <a name="resetFailedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId"></a>

```java
public void resetFailedEsxiHostId()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetHostOcpuCount` <a name="resetHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount"></a>

```java
public void resetHostOcpuCount()
```

##### `resetHostShapeName` <a name="resetHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName"></a>

```java
public void resetHostShapeName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId"></a>

```java
public void resetId()
```

##### `resetNextSku` <a name="resetNextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku"></a>

```java
public void resetNextSku()
```

##### `resetNonUpgradedEsxiHostId` <a name="resetNonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId"></a>

```java
public void resetNonUpgradedEsxiHostId()
```

##### `resetSddcId` <a name="resetSddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId"></a>

```java
public void resetSddcId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_esxi_host.OcvpEsxiHost;

OcvpEsxiHost.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_esxi_host.OcvpEsxiHost;

OcvpEsxiHost.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_esxi_host.OcvpEsxiHost;

OcvpEsxiHost.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_esxi_host.OcvpEsxiHost;

OcvpEsxiHost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OcvpEsxiHost.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OcvpEsxiHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OcvpEsxiHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OcvpEsxiHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate">billingContractEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId">computeInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment">currentCommitment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate">gracePeriodEndDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress">isBillingContinuationInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress">isBillingSwappingInProgress</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment">nextCommitment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId">replacementEsxiHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId">swapBillingHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId">upgradedReplacementEsxiHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion">vmwareSoftwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput">billingDonorHostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput">capacityReservationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput">computeAvailabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput">currentSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput">esxiSoftwareVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput">failedEsxiHostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput">hostOcpuCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput">hostShapeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput">nextSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput">nonUpgradedEsxiHostIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput">sddcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId">billingDonorHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku">currentSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId">failedEsxiHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount">hostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName">hostShapeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku">nextSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId">nonUpgradedEsxiHostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId">sddcId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingContractEndDate`<sup>Required</sup> <a name="billingContractEndDate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate"></a>

```java
public java.lang.String getBillingContractEndDate();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeInstanceId`<sup>Required</sup> <a name="computeInstanceId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId"></a>

```java
public java.lang.String getComputeInstanceId();
```

- *Type:* java.lang.String

---

##### `currentCommitment`<sup>Required</sup> <a name="currentCommitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment"></a>

```java
public java.lang.String getCurrentCommitment();
```

- *Type:* java.lang.String

---

##### `gracePeriodEndDate`<sup>Required</sup> <a name="gracePeriodEndDate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate"></a>

```java
public java.lang.String getGracePeriodEndDate();
```

- *Type:* java.lang.String

---

##### `isBillingContinuationInProgress`<sup>Required</sup> <a name="isBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress"></a>

```java
public IResolvable getIsBillingContinuationInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isBillingSwappingInProgress`<sup>Required</sup> <a name="isBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress"></a>

```java
public IResolvable getIsBillingSwappingInProgress();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nextCommitment`<sup>Required</sup> <a name="nextCommitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment"></a>

```java
public java.lang.String getNextCommitment();
```

- *Type:* java.lang.String

---

##### `replacementEsxiHostId`<sup>Required</sup> <a name="replacementEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId"></a>

```java
public java.lang.String getReplacementEsxiHostId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `swapBillingHostId`<sup>Required</sup> <a name="swapBillingHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId"></a>

```java
public java.lang.String getSwapBillingHostId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts"></a>

```java
public OcvpEsxiHostTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `upgradedReplacementEsxiHostId`<sup>Required</sup> <a name="upgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId"></a>

```java
public java.lang.String getUpgradedReplacementEsxiHostId();
```

- *Type:* java.lang.String

---

##### `vmwareSoftwareVersion`<sup>Required</sup> <a name="vmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion"></a>

```java
public java.lang.String getVmwareSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `billingDonorHostIdInput`<sup>Optional</sup> <a name="billingDonorHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput"></a>

```java
public java.lang.String getBillingDonorHostIdInput();
```

- *Type:* java.lang.String

---

##### `capacityReservationIdInput`<sup>Optional</sup> <a name="capacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput"></a>

```java
public java.lang.String getCapacityReservationIdInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomainInput`<sup>Optional</sup> <a name="computeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput"></a>

```java
public java.lang.String getComputeAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `currentSkuInput`<sup>Optional</sup> <a name="currentSkuInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput"></a>

```java
public java.lang.String getCurrentSkuInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `esxiSoftwareVersionInput`<sup>Optional</sup> <a name="esxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput"></a>

```java
public java.lang.String getEsxiSoftwareVersionInput();
```

- *Type:* java.lang.String

---

##### `failedEsxiHostIdInput`<sup>Optional</sup> <a name="failedEsxiHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput"></a>

```java
public java.lang.String getFailedEsxiHostIdInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostOcpuCountInput`<sup>Optional</sup> <a name="hostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput"></a>

```java
public java.lang.Number getHostOcpuCountInput();
```

- *Type:* java.lang.Number

---

##### `hostShapeNameInput`<sup>Optional</sup> <a name="hostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput"></a>

```java
public java.lang.String getHostShapeNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nextSkuInput`<sup>Optional</sup> <a name="nextSkuInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput"></a>

```java
public java.lang.String getNextSkuInput();
```

- *Type:* java.lang.String

---

##### `nonUpgradedEsxiHostIdInput`<sup>Optional</sup> <a name="nonUpgradedEsxiHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput"></a>

```java
public java.lang.String getNonUpgradedEsxiHostIdInput();
```

- *Type:* java.lang.String

---

##### `sddcIdInput`<sup>Optional</sup> <a name="sddcIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput"></a>

```java
public java.lang.String getSddcIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

---

##### `billingDonorHostId`<sup>Required</sup> <a name="billingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId"></a>

```java
public java.lang.String getBillingDonorHostId();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `computeAvailabilityDomain`<sup>Required</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `currentSku`<sup>Required</sup> <a name="currentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku"></a>

```java
public java.lang.String getCurrentSku();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `esxiSoftwareVersion`<sup>Required</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion"></a>

```java
public java.lang.String getEsxiSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `failedEsxiHostId`<sup>Required</sup> <a name="failedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId"></a>

```java
public java.lang.String getFailedEsxiHostId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `hostOcpuCount`<sup>Required</sup> <a name="hostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount"></a>

```java
public java.lang.Number getHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `hostShapeName`<sup>Required</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName"></a>

```java
public java.lang.String getHostShapeName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nextSku`<sup>Required</sup> <a name="nextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku"></a>

```java
public java.lang.String getNextSku();
```

- *Type:* java.lang.String

---

##### `nonUpgradedEsxiHostId`<sup>Required</sup> <a name="nonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId"></a>

```java
public java.lang.String getNonUpgradedEsxiHostId();
```

- *Type:* java.lang.String

---

##### `sddcId`<sup>Required</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId"></a>

```java
public java.lang.String getSddcId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpEsxiHostConfig <a name="OcvpEsxiHostConfig" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_esxi_host.OcvpEsxiHostConfig;

OcvpEsxiHostConfig.builder()
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
//  .billingDonorHostId(java.lang.String)
//  .capacityReservationId(java.lang.String)
//  .clusterId(java.lang.String)
//  .computeAvailabilityDomain(java.lang.String)
//  .currentSku(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .esxiSoftwareVersion(java.lang.String)
//  .failedEsxiHostId(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .hostOcpuCount(java.lang.Number)
//  .hostShapeName(java.lang.String)
//  .id(java.lang.String)
//  .nextSku(java.lang.String)
//  .nonUpgradedEsxiHostId(java.lang.String)
//  .sddcId(java.lang.String)
//  .timeouts(OcvpEsxiHostTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId">billingDonorHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain">computeAvailabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku">currentSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion">esxiSoftwareVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId">failedEsxiHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount">hostOcpuCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName">hostShapeName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku">nextSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId">nonUpgradedEsxiHostId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId">sddcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `billingDonorHostId`<sup>Optional</sup> <a name="billingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId"></a>

```java
public java.lang.String getBillingDonorHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}.

---

##### `capacityReservationId`<sup>Optional</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}.

---

##### `computeAvailabilityDomain`<sup>Optional</sup> <a name="computeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain"></a>

```java
public java.lang.String getComputeAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}.

---

##### `currentSku`<sup>Optional</sup> <a name="currentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku"></a>

```java
public java.lang.String getCurrentSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}.

---

##### `esxiSoftwareVersion`<sup>Optional</sup> <a name="esxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion"></a>

```java
public java.lang.String getEsxiSoftwareVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}.

---

##### `failedEsxiHostId`<sup>Optional</sup> <a name="failedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId"></a>

```java
public java.lang.String getFailedEsxiHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}.

---

##### `hostOcpuCount`<sup>Optional</sup> <a name="hostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount"></a>

```java
public java.lang.Number getHostOcpuCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}.

---

##### `hostShapeName`<sup>Optional</sup> <a name="hostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName"></a>

```java
public java.lang.String getHostShapeName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nextSku`<sup>Optional</sup> <a name="nextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku"></a>

```java
public java.lang.String getNextSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}.

---

##### `nonUpgradedEsxiHostId`<sup>Optional</sup> <a name="nonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId"></a>

```java
public java.lang.String getNonUpgradedEsxiHostId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}.

---

##### `sddcId`<sup>Optional</sup> <a name="sddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId"></a>

```java
public java.lang.String getSddcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts"></a>

```java
public OcvpEsxiHostTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#timeouts OcvpEsxiHost#timeouts}

---

### OcvpEsxiHostTimeouts <a name="OcvpEsxiHostTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_esxi_host.OcvpEsxiHostTimeouts;

OcvpEsxiHostTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OcvpEsxiHostTimeoutsOutputReference <a name="OcvpEsxiHostTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.ocvp_esxi_host.OcvpEsxiHostTimeoutsOutputReference;

new OcvpEsxiHostTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

---



