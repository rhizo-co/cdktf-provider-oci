# `goldenGateDeployment` Submodule <a name="`goldenGateDeployment` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDeployment <a name="GoldenGateDeployment" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment oci_golden_gate_deployment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeployment;

GoldenGateDeployment.Builder.create(Construct scope, java.lang.String id)
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
    .cpuCoreCount(java.lang.Number)
    .deploymentType(java.lang.String)
    .displayName(java.lang.String)
    .isAutoScalingEnabled(java.lang.Boolean)
    .isAutoScalingEnabled(IResolvable)
    .licenseModel(java.lang.String)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentBackupId(java.lang.String)
//  .description(java.lang.String)
//  .environmentType(java.lang.String)
//  .fqdn(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .loadBalancerSubnetId(java.lang.String)
//  .locks(IResolvable)
//  .locks(java.util.List<GoldenGateDeploymentLocks>)
//  .maintenanceConfiguration(GoldenGateDeploymentMaintenanceConfiguration)
//  .maintenanceWindow(GoldenGateDeploymentMaintenanceWindow)
//  .nsgIds(java.util.List<java.lang.String>)
//  .oggData(GoldenGateDeploymentOggData)
//  .state(java.lang.String)
//  .timeouts(GoldenGateDeploymentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.deploymentBackupId">deploymentBackupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.environmentType">environmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.loadBalancerSubnetId">loadBalancerSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | maintenance_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.oggData">oggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | ogg_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.cpuCoreCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}.

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.deploymentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}.

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isAutoScalingEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}.

---

##### `deploymentBackupId`<sup>Optional</sup> <a name="deploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.deploymentBackupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.environmentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.fqdn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isLockOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.isPublic"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}.

---

##### `loadBalancerSubnetId`<sup>Optional</sup> <a name="loadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.loadBalancerSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#locks GoldenGateDeployment#locks}

---

##### `maintenanceConfiguration`<sup>Optional</sup> <a name="maintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.maintenanceConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

maintenance_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_configuration GoldenGateDeployment#maintenance_configuration}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_window GoldenGateDeployment#maintenance_window}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}.

---

##### `oggData`<sup>Optional</sup> <a name="oggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.oggData"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_data GoldenGateDeployment#ogg_data}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#timeouts GoldenGateDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration">putMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData">putOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDeploymentBackupId">resetDeploymentBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetEnvironmentType">resetEnvironmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFqdn">resetFqdn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsPublic">resetIsPublic</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLoadBalancerSubnetId">resetLoadBalancerSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceConfiguration">resetMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOggData">resetOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<GoldenGateDeploymentLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>>

---

##### `putMaintenanceConfiguration` <a name="putMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration"></a>

```java
public void putMaintenanceConfiguration(GoldenGateDeploymentMaintenanceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(GoldenGateDeploymentMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---

##### `putOggData` <a name="putOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData"></a>

```java
public void putOggData(GoldenGateDeploymentOggData value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putOggData.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts"></a>

```java
public void putTimeouts(GoldenGateDeploymentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDeploymentBackupId` <a name="resetDeploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDeploymentBackupId"></a>

```java
public void resetDeploymentBackupId()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvironmentType` <a name="resetEnvironmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetEnvironmentType"></a>

```java
public void resetEnvironmentType()
```

##### `resetFqdn` <a name="resetFqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFqdn"></a>

```java
public void resetFqdn()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetId"></a>

```java
public void resetId()
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsLockOverride"></a>

```java
public void resetIsLockOverride()
```

##### `resetIsPublic` <a name="resetIsPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetIsPublic"></a>

```java
public void resetIsPublic()
```

##### `resetLoadBalancerSubnetId` <a name="resetLoadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLoadBalancerSubnetId"></a>

```java
public void resetLoadBalancerSubnetId()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetMaintenanceConfiguration` <a name="resetMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceConfiguration"></a>

```java
public void resetMaintenanceConfiguration()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetOggData` <a name="resetOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetOggData"></a>

```java
public void resetOggData()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeployment;

GoldenGateDeployment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeployment;

GoldenGateDeployment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeployment;

GoldenGateDeployment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeployment;

GoldenGateDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoldenGateDeployment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoldenGateDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoldenGateDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoldenGateDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentDiagnosticData">deploymentDiagnosticData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList">GoldenGateDeploymentDeploymentDiagnosticDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentUrl">deploymentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList">GoldenGateDeploymentIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isHealthy">isHealthy</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLatestVersion">isLatestVersion</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isStorageUtilizationLimitExceeded">isStorageUtilizationLimitExceeded</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleSubState">lifecycleSubState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList">GoldenGateDeploymentLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference">GoldenGateDeploymentMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference">GoldenGateDeploymentMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceActionType">nextMaintenanceActionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceDescription">nextMaintenanceDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggData">oggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference">GoldenGateDeploymentOggDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.publicIpAddress">publicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.storageUtilizationInBytes">storageUtilizationInBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOfNextMaintenance">timeOfNextMaintenance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOggVersionSupportedUntil">timeOggVersionSupportedUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference">GoldenGateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpgradeRequired">timeUpgradeRequired</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupIdInput">deploymentBackupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentTypeInput">deploymentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentTypeInput">environmentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublicInput">isPublicInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetIdInput">loadBalancerSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfigurationInput">maintenanceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggDataInput">oggDataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupId">deploymentBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetId">loadBalancerSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `deploymentDiagnosticData`<sup>Required</sup> <a name="deploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentDiagnosticData"></a>

```java
public GoldenGateDeploymentDeploymentDiagnosticDataList getDeploymentDiagnosticData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList">GoldenGateDeploymentDeploymentDiagnosticDataList</a>

---

##### `deploymentUrl`<sup>Required</sup> <a name="deploymentUrl" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentUrl"></a>

```java
public java.lang.String getDeploymentUrl();
```

- *Type:* java.lang.String

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.ingressIps"></a>

```java
public GoldenGateDeploymentIngressIpsList getIngressIps();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList">GoldenGateDeploymentIngressIpsList</a>

---

##### `isHealthy`<sup>Required</sup> <a name="isHealthy" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isHealthy"></a>

```java
public IResolvable getIsHealthy();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isLatestVersion`<sup>Required</sup> <a name="isLatestVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLatestVersion"></a>

```java
public IResolvable getIsLatestVersion();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isStorageUtilizationLimitExceeded`<sup>Required</sup> <a name="isStorageUtilizationLimitExceeded" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isStorageUtilizationLimitExceeded"></a>

```java
public IResolvable getIsStorageUtilizationLimitExceeded();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lifecycleSubState`<sup>Required</sup> <a name="lifecycleSubState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.lifecycleSubState"></a>

```java
public java.lang.String getLifecycleSubState();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locks"></a>

```java
public GoldenGateDeploymentLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList">GoldenGateDeploymentLocksList</a>

---

##### `maintenanceConfiguration`<sup>Required</sup> <a name="maintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfiguration"></a>

```java
public GoldenGateDeploymentMaintenanceConfigurationOutputReference getMaintenanceConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference">GoldenGateDeploymentMaintenanceConfigurationOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindow"></a>

```java
public GoldenGateDeploymentMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference">GoldenGateDeploymentMaintenanceWindowOutputReference</a>

---

##### `nextMaintenanceActionType`<sup>Required</sup> <a name="nextMaintenanceActionType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceActionType"></a>

```java
public java.lang.String getNextMaintenanceActionType();
```

- *Type:* java.lang.String

---

##### `nextMaintenanceDescription`<sup>Required</sup> <a name="nextMaintenanceDescription" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nextMaintenanceDescription"></a>

```java
public java.lang.String getNextMaintenanceDescription();
```

- *Type:* java.lang.String

---

##### `oggData`<sup>Required</sup> <a name="oggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggData"></a>

```java
public GoldenGateDeploymentOggDataOutputReference getOggData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference">GoldenGateDeploymentOggDataOutputReference</a>

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `publicIpAddress`<sup>Required</sup> <a name="publicIpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.publicIpAddress"></a>

```java
public java.lang.String getPublicIpAddress();
```

- *Type:* java.lang.String

---

##### `storageUtilizationInBytes`<sup>Required</sup> <a name="storageUtilizationInBytes" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.storageUtilizationInBytes"></a>

```java
public java.lang.String getStorageUtilizationInBytes();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfNextMaintenance`<sup>Required</sup> <a name="timeOfNextMaintenance" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOfNextMaintenance"></a>

```java
public java.lang.String getTimeOfNextMaintenance();
```

- *Type:* java.lang.String

---

##### `timeOggVersionSupportedUntil`<sup>Required</sup> <a name="timeOggVersionSupportedUntil" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeOggVersionSupportedUntil"></a>

```java
public java.lang.String getTimeOggVersionSupportedUntil();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeouts"></a>

```java
public GoldenGateDeploymentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference">GoldenGateDeploymentTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `timeUpgradeRequired`<sup>Required</sup> <a name="timeUpgradeRequired" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeUpgradeRequired"></a>

```java
public java.lang.String getTimeUpgradeRequired();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCountInput"></a>

```java
public java.lang.Number getCpuCoreCountInput();
```

- *Type:* java.lang.Number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentBackupIdInput`<sup>Optional</sup> <a name="deploymentBackupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupIdInput"></a>

```java
public java.lang.String getDeploymentBackupIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentTypeInput`<sup>Optional</sup> <a name="deploymentTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentTypeInput"></a>

```java
public java.lang.String getDeploymentTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `environmentTypeInput`<sup>Optional</sup> <a name="environmentTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentTypeInput"></a>

```java
public java.lang.String getEnvironmentTypeInput();
```

- *Type:* java.lang.String

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabledInput"></a>

```java
public java.lang.Object getIsAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverrideInput"></a>

```java
public java.lang.Object getIsLockOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPublicInput`<sup>Optional</sup> <a name="isPublicInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublicInput"></a>

```java
public java.lang.Object getIsPublicInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerSubnetIdInput`<sup>Optional</sup> <a name="loadBalancerSubnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetIdInput"></a>

```java
public java.lang.String getLoadBalancerSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>>

---

##### `maintenanceConfigurationInput`<sup>Optional</sup> <a name="maintenanceConfigurationInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceConfigurationInput"></a>

```java
public GoldenGateDeploymentMaintenanceConfiguration getMaintenanceConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.maintenanceWindowInput"></a>

```java
public GoldenGateDeploymentMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oggDataInput`<sup>Optional</sup> <a name="oggDataInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.oggDataInput"></a>

```java
public GoldenGateDeploymentOggData getOggDataInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentBackupId`<sup>Required</sup> <a name="deploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentBackupId"></a>

```java
public java.lang.String getDeploymentBackupId();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `environmentType`<sup>Required</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPublic`<sup>Required</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `loadBalancerSubnetId`<sup>Required</sup> <a name="loadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.loadBalancerSubnetId"></a>

```java
public java.lang.String getLoadBalancerSubnetId();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeployment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDeploymentConfig <a name="GoldenGateDeploymentConfig" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentConfig;

GoldenGateDeploymentConfig.builder()
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
    .cpuCoreCount(java.lang.Number)
    .deploymentType(java.lang.String)
    .displayName(java.lang.String)
    .isAutoScalingEnabled(java.lang.Boolean)
    .isAutoScalingEnabled(IResolvable)
    .licenseModel(java.lang.String)
    .subnetId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .deploymentBackupId(java.lang.String)
//  .description(java.lang.String)
//  .environmentType(java.lang.String)
//  .fqdn(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .isPublic(java.lang.Boolean)
//  .isPublic(IResolvable)
//  .loadBalancerSubnetId(java.lang.String)
//  .locks(IResolvable)
//  .locks(java.util.List<GoldenGateDeploymentLocks>)
//  .maintenanceConfiguration(GoldenGateDeploymentMaintenanceConfiguration)
//  .maintenanceWindow(GoldenGateDeploymentMaintenanceWindow)
//  .nsgIds(java.util.List<java.lang.String>)
//  .oggData(GoldenGateDeploymentOggData)
//  .state(java.lang.String)
//  .timeouts(GoldenGateDeploymentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentBackupId">deploymentBackupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.environmentType">environmentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isPublic">isPublic</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.loadBalancerSubnetId">loadBalancerSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceConfiguration">maintenanceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | maintenance_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.oggData">oggData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | ogg_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#compartment_id GoldenGateDeployment#compartment_id}.

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#cpu_core_count GoldenGateDeployment#cpu_core_count}.

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_type GoldenGateDeployment#deployment_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#display_name GoldenGateDeployment#display_name}.

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isAutoScalingEnabled"></a>

```java
public java.lang.Object getIsAutoScalingEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_auto_scaling_enabled GoldenGateDeployment#is_auto_scaling_enabled}.

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#license_model GoldenGateDeployment#license_model}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#subnet_id GoldenGateDeployment#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#defined_tags GoldenGateDeployment#defined_tags}.

---

##### `deploymentBackupId`<sup>Optional</sup> <a name="deploymentBackupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.deploymentBackupId"></a>

```java
public java.lang.String getDeploymentBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_backup_id GoldenGateDeployment#deployment_backup_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#description GoldenGateDeployment#description}.

---

##### `environmentType`<sup>Optional</sup> <a name="environmentType" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.environmentType"></a>

```java
public java.lang.String getEnvironmentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#environment_type GoldenGateDeployment#environment_type}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#fqdn GoldenGateDeployment#fqdn}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#freeform_tags GoldenGateDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#id GoldenGateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_lock_override GoldenGateDeployment#is_lock_override}.

---

##### `isPublic`<sup>Optional</sup> <a name="isPublic" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.isPublic"></a>

```java
public java.lang.Object getIsPublic();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_public GoldenGateDeployment#is_public}.

---

##### `loadBalancerSubnetId`<sup>Optional</sup> <a name="loadBalancerSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.loadBalancerSubnetId"></a>

```java
public java.lang.String getLoadBalancerSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#load_balancer_subnet_id GoldenGateDeployment#load_balancer_subnet_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#locks GoldenGateDeployment#locks}

---

##### `maintenanceConfiguration`<sup>Optional</sup> <a name="maintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceConfiguration"></a>

```java
public GoldenGateDeploymentMaintenanceConfiguration getMaintenanceConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

maintenance_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_configuration GoldenGateDeployment#maintenance_configuration}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.maintenanceWindow"></a>

```java
public GoldenGateDeploymentMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#maintenance_window GoldenGateDeployment#maintenance_window}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#nsg_ids GoldenGateDeployment#nsg_ids}.

---

##### `oggData`<sup>Optional</sup> <a name="oggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.oggData"></a>

```java
public GoldenGateDeploymentOggData getOggData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

ogg_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_data GoldenGateDeployment#ogg_data}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#state GoldenGateDeployment#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentConfig.property.timeouts"></a>

```java
public GoldenGateDeploymentTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#timeouts GoldenGateDeployment#timeouts}

---

### GoldenGateDeploymentDeploymentDiagnosticData <a name="GoldenGateDeploymentDeploymentDiagnosticData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentDeploymentDiagnosticData;

GoldenGateDeploymentDeploymentDiagnosticData.builder()
    .build();
```


### GoldenGateDeploymentIngressIps <a name="GoldenGateDeploymentIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentIngressIps;

GoldenGateDeploymentIngressIps.builder()
    .build();
```


### GoldenGateDeploymentLocks <a name="GoldenGateDeploymentLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentLocks;

GoldenGateDeploymentLocks.builder()
    .type(java.lang.String)
//  .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#type GoldenGateDeployment#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#message GoldenGateDeployment#message}.

---

### GoldenGateDeploymentMaintenanceConfiguration <a name="GoldenGateDeploymentMaintenanceConfiguration" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentMaintenanceConfiguration;

GoldenGateDeploymentMaintenanceConfiguration.builder()
//  .bundleReleaseUpgradePeriodInDays(java.lang.Number)
//  .interimReleaseUpgradePeriodInDays(java.lang.Number)
//  .isInterimReleaseAutoUpgradeEnabled(java.lang.Boolean)
//  .isInterimReleaseAutoUpgradeEnabled(IResolvable)
//  .majorReleaseUpgradePeriodInDays(java.lang.Number)
//  .securityPatchUpgradePeriodInDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.bundleReleaseUpgradePeriodInDays">bundleReleaseUpgradePeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.interimReleaseUpgradePeriodInDays">interimReleaseUpgradePeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.majorReleaseUpgradePeriodInDays">majorReleaseUpgradePeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.securityPatchUpgradePeriodInDays">securityPatchUpgradePeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}. |

---

##### `bundleReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="bundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.bundleReleaseUpgradePeriodInDays"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#bundle_release_upgrade_period_in_days GoldenGateDeployment#bundle_release_upgrade_period_in_days}.

---

##### `interimReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="interimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.interimReleaseUpgradePeriodInDays"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#interim_release_upgrade_period_in_days GoldenGateDeployment#interim_release_upgrade_period_in_days}.

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Optional</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.isInterimReleaseAutoUpgradeEnabled"></a>

```java
public java.lang.Object getIsInterimReleaseAutoUpgradeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#is_interim_release_auto_upgrade_enabled GoldenGateDeployment#is_interim_release_auto_upgrade_enabled}.

---

##### `majorReleaseUpgradePeriodInDays`<sup>Optional</sup> <a name="majorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.majorReleaseUpgradePeriodInDays"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#major_release_upgrade_period_in_days GoldenGateDeployment#major_release_upgrade_period_in_days}.

---

##### `securityPatchUpgradePeriodInDays`<sup>Optional</sup> <a name="securityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration.property.securityPatchUpgradePeriodInDays"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_patch_upgrade_period_in_days GoldenGateDeployment#security_patch_upgrade_period_in_days}.

---

### GoldenGateDeploymentMaintenanceWindow <a name="GoldenGateDeploymentMaintenanceWindow" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentMaintenanceWindow;

GoldenGateDeploymentMaintenanceWindow.builder()
    .day(java.lang.String)
    .startHour(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.day">day</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}. |

---

##### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#day GoldenGateDeployment#day}.

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#start_hour GoldenGateDeployment#start_hour}.

---

### GoldenGateDeploymentOggData <a name="GoldenGateDeploymentOggData" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentOggData;

GoldenGateDeploymentOggData.builder()
    .deploymentName(java.lang.String)
//  .adminPassword(java.lang.String)
//  .adminUsername(java.lang.String)
//  .certificate(java.lang.String)
//  .credentialStore(java.lang.String)
//  .groupToRolesMapping(GoldenGateDeploymentOggDataGroupToRolesMapping)
//  .identityDomainId(java.lang.String)
//  .key(java.lang.String)
//  .oggVersion(java.lang.String)
//  .passwordSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.deploymentName">deploymentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.credentialStore">credentialStore</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.groupToRolesMapping">groupToRolesMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | group_to_roles_mapping block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.identityDomainId">identityDomainId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.oggVersion">oggVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}. |

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.deploymentName"></a>

```java
public java.lang.String getDeploymentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#deployment_name GoldenGateDeployment#deployment_name}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_password GoldenGateDeployment#admin_password}.

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#admin_username GoldenGateDeployment#admin_username}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#certificate GoldenGateDeployment#certificate}.

---

##### `credentialStore`<sup>Optional</sup> <a name="credentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.credentialStore"></a>

```java
public java.lang.String getCredentialStore();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#credential_store GoldenGateDeployment#credential_store}.

---

##### `groupToRolesMapping`<sup>Optional</sup> <a name="groupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.groupToRolesMapping"></a>

```java
public GoldenGateDeploymentOggDataGroupToRolesMapping getGroupToRolesMapping();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

group_to_roles_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#group_to_roles_mapping GoldenGateDeployment#group_to_roles_mapping}

---

##### `identityDomainId`<sup>Optional</sup> <a name="identityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.identityDomainId"></a>

```java
public java.lang.String getIdentityDomainId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#identity_domain_id GoldenGateDeployment#identity_domain_id}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#key GoldenGateDeployment#key}.

---

##### `oggVersion`<sup>Optional</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.oggVersion"></a>

```java
public java.lang.String getOggVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#ogg_version GoldenGateDeployment#ogg_version}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#password_secret_id GoldenGateDeployment#password_secret_id}.

---

### GoldenGateDeploymentOggDataGroupToRolesMapping <a name="GoldenGateDeploymentOggDataGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentOggDataGroupToRolesMapping;

GoldenGateDeploymentOggDataGroupToRolesMapping.builder()
    .securityGroupId(java.lang.String)
//  .administratorGroupId(java.lang.String)
//  .operatorGroupId(java.lang.String)
//  .userGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.administratorGroupId">administratorGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.operatorGroupId">operatorGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.userGroupId">userGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}. |

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#security_group_id GoldenGateDeployment#security_group_id}.

---

##### `administratorGroupId`<sup>Optional</sup> <a name="administratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.administratorGroupId"></a>

```java
public java.lang.String getAdministratorGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#administrator_group_id GoldenGateDeployment#administrator_group_id}.

---

##### `operatorGroupId`<sup>Optional</sup> <a name="operatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.operatorGroupId"></a>

```java
public java.lang.String getOperatorGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#operator_group_id GoldenGateDeployment#operator_group_id}.

---

##### `userGroupId`<sup>Optional</sup> <a name="userGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping.property.userGroupId"></a>

```java
public java.lang.String getUserGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#user_group_id GoldenGateDeployment#user_group_id}.

---

### GoldenGateDeploymentTimeouts <a name="GoldenGateDeploymentTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentTimeouts;

GoldenGateDeploymentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#create GoldenGateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#delete GoldenGateDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment#update GoldenGateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDeploymentDeploymentDiagnosticDataList <a name="GoldenGateDeploymentDeploymentDiagnosticDataList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentDeploymentDiagnosticDataList;

new GoldenGateDeploymentDeploymentDiagnosticDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get"></a>

```java
public GoldenGateDeploymentDeploymentDiagnosticDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoldenGateDeploymentDeploymentDiagnosticDataOutputReference <a name="GoldenGateDeploymentDeploymentDiagnosticDataOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference;

new GoldenGateDeploymentDeploymentDiagnosticDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.diagnosticState">diagnosticState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd">timeDiagnosticEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart">timeDiagnosticStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData">GoldenGateDeploymentDeploymentDiagnosticData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `diagnosticState`<sup>Required</sup> <a name="diagnosticState" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.diagnosticState"></a>

```java
public java.lang.String getDiagnosticState();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

##### `timeDiagnosticEnd`<sup>Required</sup> <a name="timeDiagnosticEnd" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticEnd"></a>

```java
public java.lang.String getTimeDiagnosticEnd();
```

- *Type:* java.lang.String

---

##### `timeDiagnosticStart`<sup>Required</sup> <a name="timeDiagnosticStart" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.timeDiagnosticStart"></a>

```java
public java.lang.String getTimeDiagnosticStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticDataOutputReference.property.internalValue"></a>

```java
public GoldenGateDeploymentDeploymentDiagnosticData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentDeploymentDiagnosticData">GoldenGateDeploymentDeploymentDiagnosticData</a>

---


### GoldenGateDeploymentIngressIpsList <a name="GoldenGateDeploymentIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentIngressIpsList;

new GoldenGateDeploymentIngressIpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get"></a>

```java
public GoldenGateDeploymentIngressIpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoldenGateDeploymentIngressIpsOutputReference <a name="GoldenGateDeploymentIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentIngressIpsOutputReference;

new GoldenGateDeploymentIngressIpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps">GoldenGateDeploymentIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.ingressIp"></a>

```java
public java.lang.String getIngressIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIpsOutputReference.property.internalValue"></a>

```java
public GoldenGateDeploymentIngressIps getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentIngressIps">GoldenGateDeploymentIngressIps</a>

---


### GoldenGateDeploymentLocksList <a name="GoldenGateDeploymentLocksList" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentLocksList;

new GoldenGateDeploymentLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get"></a>

```java
public GoldenGateDeploymentLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>>

---


### GoldenGateDeploymentLocksOutputReference <a name="GoldenGateDeploymentLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentLocksOutputReference;

new GoldenGateDeploymentLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentLocks">GoldenGateDeploymentLocks</a>

---


### GoldenGateDeploymentMaintenanceConfigurationOutputReference <a name="GoldenGateDeploymentMaintenanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference;

new GoldenGateDeploymentMaintenanceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetBundleReleaseUpgradePeriodInDays">resetBundleReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetInterimReleaseUpgradePeriodInDays">resetInterimReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetIsInterimReleaseAutoUpgradeEnabled">resetIsInterimReleaseAutoUpgradeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetMajorReleaseUpgradePeriodInDays">resetMajorReleaseUpgradePeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetSecurityPatchUpgradePeriodInDays">resetSecurityPatchUpgradePeriodInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBundleReleaseUpgradePeriodInDays` <a name="resetBundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetBundleReleaseUpgradePeriodInDays"></a>

```java
public void resetBundleReleaseUpgradePeriodInDays()
```

##### `resetInterimReleaseUpgradePeriodInDays` <a name="resetInterimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetInterimReleaseUpgradePeriodInDays"></a>

```java
public void resetInterimReleaseUpgradePeriodInDays()
```

##### `resetIsInterimReleaseAutoUpgradeEnabled` <a name="resetIsInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetIsInterimReleaseAutoUpgradeEnabled"></a>

```java
public void resetIsInterimReleaseAutoUpgradeEnabled()
```

##### `resetMajorReleaseUpgradePeriodInDays` <a name="resetMajorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetMajorReleaseUpgradePeriodInDays"></a>

```java
public void resetMajorReleaseUpgradePeriodInDays()
```

##### `resetSecurityPatchUpgradePeriodInDays` <a name="resetSecurityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.resetSecurityPatchUpgradePeriodInDays"></a>

```java
public void resetSecurityPatchUpgradePeriodInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDaysInput">bundleReleaseUpgradePeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDaysInput">interimReleaseUpgradePeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput">isInterimReleaseAutoUpgradeEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDaysInput">majorReleaseUpgradePeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDaysInput">securityPatchUpgradePeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays">bundleReleaseUpgradePeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays">interimReleaseUpgradePeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled">isInterimReleaseAutoUpgradeEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays">majorReleaseUpgradePeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays">securityPatchUpgradePeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bundleReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="bundleReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDaysInput"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `interimReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="interimReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDaysInput"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `isInterimReleaseAutoUpgradeEnabledInput`<sup>Optional</sup> <a name="isInterimReleaseAutoUpgradeEnabledInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabledInput"></a>

```java
public java.lang.Object getIsInterimReleaseAutoUpgradeEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `majorReleaseUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="majorReleaseUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDaysInput"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `securityPatchUpgradePeriodInDaysInput`<sup>Optional</sup> <a name="securityPatchUpgradePeriodInDaysInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDaysInput"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `bundleReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="bundleReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.bundleReleaseUpgradePeriodInDays"></a>

```java
public java.lang.Number getBundleReleaseUpgradePeriodInDays();
```

- *Type:* java.lang.Number

---

##### `interimReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="interimReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.interimReleaseUpgradePeriodInDays"></a>

```java
public java.lang.Number getInterimReleaseUpgradePeriodInDays();
```

- *Type:* java.lang.Number

---

##### `isInterimReleaseAutoUpgradeEnabled`<sup>Required</sup> <a name="isInterimReleaseAutoUpgradeEnabled" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.isInterimReleaseAutoUpgradeEnabled"></a>

```java
public java.lang.Object getIsInterimReleaseAutoUpgradeEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `majorReleaseUpgradePeriodInDays`<sup>Required</sup> <a name="majorReleaseUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.majorReleaseUpgradePeriodInDays"></a>

```java
public java.lang.Number getMajorReleaseUpgradePeriodInDays();
```

- *Type:* java.lang.Number

---

##### `securityPatchUpgradePeriodInDays`<sup>Required</sup> <a name="securityPatchUpgradePeriodInDays" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.securityPatchUpgradePeriodInDays"></a>

```java
public java.lang.Number getSecurityPatchUpgradePeriodInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfigurationOutputReference.property.internalValue"></a>

```java
public GoldenGateDeploymentMaintenanceConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceConfiguration">GoldenGateDeploymentMaintenanceConfiguration</a>

---


### GoldenGateDeploymentMaintenanceWindowOutputReference <a name="GoldenGateDeploymentMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentMaintenanceWindowOutputReference;

new GoldenGateDeploymentMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHourInput">startHourInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHour">startHour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.dayInput"></a>

```java
public java.lang.String getDayInput();
```

- *Type:* java.lang.String

---

##### `startHourInput`<sup>Optional</sup> <a name="startHourInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHourInput"></a>

```java
public java.lang.Number getStartHourInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `startHour`<sup>Required</sup> <a name="startHour" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.startHour"></a>

```java
public java.lang.Number getStartHour();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public GoldenGateDeploymentMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentMaintenanceWindow">GoldenGateDeploymentMaintenanceWindow</a>

---


### GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference <a name="GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference;

new GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetAdministratorGroupId">resetAdministratorGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetOperatorGroupId">resetOperatorGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetUserGroupId">resetUserGroupId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdministratorGroupId` <a name="resetAdministratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetAdministratorGroupId"></a>

```java
public void resetAdministratorGroupId()
```

##### `resetOperatorGroupId` <a name="resetOperatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetOperatorGroupId"></a>

```java
public void resetOperatorGroupId()
```

##### `resetUserGroupId` <a name="resetUserGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.resetUserGroupId"></a>

```java
public void resetUserGroupId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupIdInput">administratorGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupIdInput">operatorGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupIdInput">userGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupId">administratorGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupId">operatorGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupId">userGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `administratorGroupIdInput`<sup>Optional</sup> <a name="administratorGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupIdInput"></a>

```java
public java.lang.String getAdministratorGroupIdInput();
```

- *Type:* java.lang.String

---

##### `operatorGroupIdInput`<sup>Optional</sup> <a name="operatorGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupIdInput"></a>

```java
public java.lang.String getOperatorGroupIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `userGroupIdInput`<sup>Optional</sup> <a name="userGroupIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupIdInput"></a>

```java
public java.lang.String getUserGroupIdInput();
```

- *Type:* java.lang.String

---

##### `administratorGroupId`<sup>Required</sup> <a name="administratorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.administratorGroupId"></a>

```java
public java.lang.String getAdministratorGroupId();
```

- *Type:* java.lang.String

---

##### `operatorGroupId`<sup>Required</sup> <a name="operatorGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.operatorGroupId"></a>

```java
public java.lang.String getOperatorGroupId();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.userGroupId"></a>

```java
public java.lang.String getUserGroupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference.property.internalValue"></a>

```java
public GoldenGateDeploymentOggDataGroupToRolesMapping getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---


### GoldenGateDeploymentOggDataOutputReference <a name="GoldenGateDeploymentOggDataOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentOggDataOutputReference;

new GoldenGateDeploymentOggDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping">putGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminUsername">resetAdminUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCredentialStore">resetCredentialStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetGroupToRolesMapping">resetGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetIdentityDomainId">resetIdentityDomainId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetOggVersion">resetOggVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGroupToRolesMapping` <a name="putGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping"></a>

```java
public void putGroupToRolesMapping(GoldenGateDeploymentOggDataGroupToRolesMapping value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.putGroupToRolesMapping.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminPassword"></a>

```java
public void resetAdminPassword()
```

##### `resetAdminUsername` <a name="resetAdminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetAdminUsername"></a>

```java
public void resetAdminUsername()
```

##### `resetCertificate` <a name="resetCertificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetCredentialStore` <a name="resetCredentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetCredentialStore"></a>

```java
public void resetCredentialStore()
```

##### `resetGroupToRolesMapping` <a name="resetGroupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetGroupToRolesMapping"></a>

```java
public void resetGroupToRolesMapping()
```

##### `resetIdentityDomainId` <a name="resetIdentityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetIdentityDomainId"></a>

```java
public void resetIdentityDomainId()
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOggVersion` <a name="resetOggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetOggVersion"></a>

```java
public void resetOggVersion()
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.resetPasswordSecretId"></a>

```java
public void resetPasswordSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMapping">groupToRolesMapping</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference">GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsernameInput">adminUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStoreInput">credentialStoreInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentNameInput">deploymentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMappingInput">groupToRolesMappingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainIdInput">identityDomainIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersionInput">oggVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsername">adminUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStore">credentialStore</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentName">deploymentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainId">identityDomainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersion">oggVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupToRolesMapping`<sup>Required</sup> <a name="groupToRolesMapping" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMapping"></a>

```java
public GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference getGroupToRolesMapping();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference">GoldenGateDeploymentOggDataGroupToRolesMappingOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminUsernameInput`<sup>Optional</sup> <a name="adminUsernameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsernameInput"></a>

```java
public java.lang.String getAdminUsernameInput();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `credentialStoreInput`<sup>Optional</sup> <a name="credentialStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStoreInput"></a>

```java
public java.lang.String getCredentialStoreInput();
```

- *Type:* java.lang.String

---

##### `deploymentNameInput`<sup>Optional</sup> <a name="deploymentNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentNameInput"></a>

```java
public java.lang.String getDeploymentNameInput();
```

- *Type:* java.lang.String

---

##### `groupToRolesMappingInput`<sup>Optional</sup> <a name="groupToRolesMappingInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.groupToRolesMappingInput"></a>

```java
public GoldenGateDeploymentOggDataGroupToRolesMapping getGroupToRolesMappingInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataGroupToRolesMapping">GoldenGateDeploymentOggDataGroupToRolesMapping</a>

---

##### `identityDomainIdInput`<sup>Optional</sup> <a name="identityDomainIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainIdInput"></a>

```java
public java.lang.String getIdentityDomainIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `oggVersionInput`<sup>Optional</sup> <a name="oggVersionInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersionInput"></a>

```java
public java.lang.String getOggVersionInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.adminUsername"></a>

```java
public java.lang.String getAdminUsername();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `credentialStore`<sup>Required</sup> <a name="credentialStore" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.credentialStore"></a>

```java
public java.lang.String getCredentialStore();
```

- *Type:* java.lang.String

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.deploymentName"></a>

```java
public java.lang.String getDeploymentName();
```

- *Type:* java.lang.String

---

##### `identityDomainId`<sup>Required</sup> <a name="identityDomainId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.identityDomainId"></a>

```java
public java.lang.String getIdentityDomainId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.oggVersion"></a>

```java
public java.lang.String getOggVersion();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggDataOutputReference.property.internalValue"></a>

```java
public GoldenGateDeploymentOggData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentOggData">GoldenGateDeploymentOggData</a>

---


### GoldenGateDeploymentTimeoutsOutputReference <a name="GoldenGateDeploymentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment.GoldenGateDeploymentTimeoutsOutputReference;

new GoldenGateDeploymentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeployment.GoldenGateDeploymentTimeouts">GoldenGateDeploymentTimeouts</a>

---



