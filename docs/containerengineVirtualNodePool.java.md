# `containerengineVirtualNodePool` Submodule <a name="`containerengineVirtualNodePool` Submodule" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineVirtualNodePool <a name="ContainerengineVirtualNodePool" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool oci_containerengine_virtual_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePool;

ContainerengineVirtualNodePool.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .placementConfigurations(IResolvable)
    .placementConfigurations(java.util.List<ContainerengineVirtualNodePoolPlacementConfigurations>)
    .podConfiguration(ContainerengineVirtualNodePoolPodConfiguration)
    .size(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .initialVirtualNodeLabels(IResolvable)
//  .initialVirtualNodeLabels(java.util.List<ContainerengineVirtualNodePoolInitialVirtualNodeLabels>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .taints(IResolvable)
//  .taints(java.util.List<ContainerengineVirtualNodePoolTaints>)
//  .timeouts(ContainerengineVirtualNodePoolTimeouts)
//  .virtualNodeTags(ContainerengineVirtualNodePoolVirtualNodeTags)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.placementConfigurations">placementConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>></code> | placement_configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.podConfiguration">podConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | pod_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.initialVirtualNodeLabels">initialVirtualNodeLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>></code> | initial_virtual_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>></code> | taints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.virtualNodeTags">virtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | virtual_node_tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}.

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.placementConfigurations"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>>

placement_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#placement_configurations ContainerengineVirtualNodePool#placement_configurations}

---

##### `podConfiguration`<sup>Required</sup> <a name="podConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.podConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

pod_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#pod_configuration ContainerengineVirtualNodePool#pod_configuration}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialVirtualNodeLabels`<sup>Optional</sup> <a name="initialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.initialVirtualNodeLabels"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>>

initial_virtual_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#initial_virtual_node_labels ContainerengineVirtualNodePool#initial_virtual_node_labels}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.nsgIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.taints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#taints ContainerengineVirtualNodePool#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#timeouts ContainerengineVirtualNodePool#timeouts}

---

##### `virtualNodeTags`<sup>Optional</sup> <a name="virtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.virtualNodeTags"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

virtual_node_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#virtual_node_tags ContainerengineVirtualNodePool#virtual_node_tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels">putInitialVirtualNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations">putPlacementConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration">putPodConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints">putTaints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags">putVirtualNodeTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetInitialVirtualNodeLabels">resetInitialVirtualNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTaints">resetTaints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetVirtualNodeTags">resetVirtualNodeTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInitialVirtualNodeLabels` <a name="putInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels"></a>

```java
public void putInitialVirtualNodeLabels(IResolvable OR java.util.List<ContainerengineVirtualNodePoolInitialVirtualNodeLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>>

---

##### `putPlacementConfigurations` <a name="putPlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations"></a>

```java
public void putPlacementConfigurations(IResolvable OR java.util.List<ContainerengineVirtualNodePoolPlacementConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>>

---

##### `putPodConfiguration` <a name="putPodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration"></a>

```java
public void putPodConfiguration(ContainerengineVirtualNodePoolPodConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---

##### `putTaints` <a name="putTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints"></a>

```java
public void putTaints(IResolvable OR java.util.List<ContainerengineVirtualNodePoolTaints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts"></a>

```java
public void putTimeouts(ContainerengineVirtualNodePoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

---

##### `putVirtualNodeTags` <a name="putVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags"></a>

```java
public void putVirtualNodeTags(ContainerengineVirtualNodePoolVirtualNodeTags value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetId"></a>

```java
public void resetId()
```

##### `resetInitialVirtualNodeLabels` <a name="resetInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetInitialVirtualNodeLabels"></a>

```java
public void resetInitialVirtualNodeLabels()
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetNsgIds"></a>

```java
public void resetNsgIds()
```

##### `resetTaints` <a name="resetTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTaints"></a>

```java
public void resetTaints()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirtualNodeTags` <a name="resetVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetVirtualNodeTags"></a>

```java
public void resetVirtualNodeTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePool;

ContainerengineVirtualNodePool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePool;

ContainerengineVirtualNodePool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePool;

ContainerengineVirtualNodePool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePool;

ContainerengineVirtualNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ContainerengineVirtualNodePool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ContainerengineVirtualNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ContainerengineVirtualNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineVirtualNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabels">initialVirtualNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurations">placementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList">ContainerengineVirtualNodePoolPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfiguration">podConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference">ContainerengineVirtualNodePoolPodConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taints">taints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList">ContainerengineVirtualNodePoolTaintsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference">ContainerengineVirtualNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTags">virtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference">ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabelsInput">initialVirtualNodeLabelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurationsInput">placementConfigurationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfigurationInput">podConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taintsInput">taintsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTagsInput">virtualNodeTagsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `initialVirtualNodeLabels`<sup>Required</sup> <a name="initialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabels"></a>

```java
public ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList getInitialVirtualNodeLabels();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.kubernetesVersion"></a>

```java
public java.lang.String getKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurations"></a>

```java
public ContainerengineVirtualNodePoolPlacementConfigurationsList getPlacementConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList">ContainerengineVirtualNodePoolPlacementConfigurationsList</a>

---

##### `podConfiguration`<sup>Required</sup> <a name="podConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfiguration"></a>

```java
public ContainerengineVirtualNodePoolPodConfigurationOutputReference getPodConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference">ContainerengineVirtualNodePoolPodConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `taints`<sup>Required</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taints"></a>

```java
public ContainerengineVirtualNodePoolTaintsList getTaints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList">ContainerengineVirtualNodePoolTaintsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeouts"></a>

```java
public ContainerengineVirtualNodePoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference">ContainerengineVirtualNodePoolTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `virtualNodeTags`<sup>Required</sup> <a name="virtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTags"></a>

```java
public ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference getVirtualNodeTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference">ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialVirtualNodeLabelsInput`<sup>Optional</sup> <a name="initialVirtualNodeLabelsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabelsInput"></a>

```java
public java.lang.Object getInitialVirtualNodeLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>>

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `placementConfigurationsInput`<sup>Optional</sup> <a name="placementConfigurationsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurationsInput"></a>

```java
public java.lang.Object getPlacementConfigurationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>>

---

##### `podConfigurationInput`<sup>Optional</sup> <a name="podConfigurationInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfigurationInput"></a>

```java
public ContainerengineVirtualNodePoolPodConfiguration getPodConfigurationInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `taintsInput`<sup>Optional</sup> <a name="taintsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taintsInput"></a>

```java
public java.lang.Object getTaintsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

---

##### `virtualNodeTagsInput`<sup>Optional</sup> <a name="virtualNodeTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTagsInput"></a>

```java
public ContainerengineVirtualNodePoolVirtualNodeTags getVirtualNodeTagsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineVirtualNodePoolConfig <a name="ContainerengineVirtualNodePoolConfig" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolConfig;

ContainerengineVirtualNodePoolConfig.builder()
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
    .clusterId(java.lang.String)
    .compartmentId(java.lang.String)
    .displayName(java.lang.String)
    .placementConfigurations(IResolvable)
    .placementConfigurations(java.util.List<ContainerengineVirtualNodePoolPlacementConfigurations>)
    .podConfiguration(ContainerengineVirtualNodePoolPodConfiguration)
    .size(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .initialVirtualNodeLabels(IResolvable)
//  .initialVirtualNodeLabels(java.util.List<ContainerengineVirtualNodePoolInitialVirtualNodeLabels>)
//  .nsgIds(java.util.List<java.lang.String>)
//  .taints(IResolvable)
//  .taints(java.util.List<ContainerengineVirtualNodePoolTaints>)
//  .timeouts(ContainerengineVirtualNodePoolTimeouts)
//  .virtualNodeTags(ContainerengineVirtualNodePoolVirtualNodeTags)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.placementConfigurations">placementConfigurations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>></code> | placement_configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.podConfiguration">podConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | pod_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.initialVirtualNodeLabels">initialVirtualNodeLabels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>></code> | initial_virtual_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.taints">taints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>></code> | taints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.virtualNodeTags">virtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | virtual_node_tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}.

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.placementConfigurations"></a>

```java
public java.lang.Object getPlacementConfigurations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>>

placement_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#placement_configurations ContainerengineVirtualNodePool#placement_configurations}

---

##### `podConfiguration`<sup>Required</sup> <a name="podConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.podConfiguration"></a>

```java
public ContainerengineVirtualNodePoolPodConfiguration getPodConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

pod_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#pod_configuration ContainerengineVirtualNodePool#pod_configuration}

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialVirtualNodeLabels`<sup>Optional</sup> <a name="initialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.initialVirtualNodeLabels"></a>

```java
public java.lang.Object getInitialVirtualNodeLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>>

initial_virtual_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#initial_virtual_node_labels ContainerengineVirtualNodePool#initial_virtual_node_labels}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

##### `taints`<sup>Optional</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.taints"></a>

```java
public java.lang.Object getTaints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>>

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#taints ContainerengineVirtualNodePool#taints}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.timeouts"></a>

```java
public ContainerengineVirtualNodePoolTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#timeouts ContainerengineVirtualNodePool#timeouts}

---

##### `virtualNodeTags`<sup>Optional</sup> <a name="virtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.virtualNodeTags"></a>

```java
public ContainerengineVirtualNodePoolVirtualNodeTags getVirtualNodeTags();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

virtual_node_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#virtual_node_tags ContainerengineVirtualNodePool#virtual_node_tags}

---

### ContainerengineVirtualNodePoolInitialVirtualNodeLabels <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels;

ContainerengineVirtualNodePoolInitialVirtualNodeLabels.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}.

---

### ContainerengineVirtualNodePoolPlacementConfigurations <a name="ContainerengineVirtualNodePoolPlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolPlacementConfigurations;

ContainerengineVirtualNodePoolPlacementConfigurations.builder()
    .availabilityDomain(java.lang.String)
    .faultDomain(java.util.List<java.lang.String>)
    .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#availability_domain ContainerengineVirtualNodePool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.faultDomain">faultDomain</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#fault_domain ContainerengineVirtualNodePool#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}. |

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#availability_domain ContainerengineVirtualNodePool#availability_domain}.

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.faultDomain"></a>

```java
public java.util.List<java.lang.String> getFaultDomain();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#fault_domain ContainerengineVirtualNodePool#fault_domain}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

### ContainerengineVirtualNodePoolPodConfiguration <a name="ContainerengineVirtualNodePoolPodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolPodConfiguration;

ContainerengineVirtualNodePoolPodConfiguration.builder()
    .shape(java.lang.String)
    .subnetId(java.lang.String)
//  .nsgIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

### ContainerengineVirtualNodePoolTaints <a name="ContainerengineVirtualNodePoolTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolTaints;

ContainerengineVirtualNodePoolTaints.builder()
//  .effect(java.lang.String)
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.effect">effect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#effect ContainerengineVirtualNodePool#effect}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}. |

---

##### `effect`<sup>Optional</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#effect ContainerengineVirtualNodePool#effect}.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}.

---

### ContainerengineVirtualNodePoolTimeouts <a name="ContainerengineVirtualNodePoolTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolTimeouts;

ContainerengineVirtualNodePoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}.

---

### ContainerengineVirtualNodePoolVirtualNodeTags <a name="ContainerengineVirtualNodePoolVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolVirtualNodeTags;

ContainerengineVirtualNodePoolVirtualNodeTags.builder()
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList;

new ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get"></a>

```java
public ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>>

---


### ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference;

new ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels">ContainerengineVirtualNodePoolInitialVirtualNodeLabels</a>

---


### ContainerengineVirtualNodePoolPlacementConfigurationsList <a name="ContainerengineVirtualNodePoolPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolPlacementConfigurationsList;

new ContainerengineVirtualNodePoolPlacementConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get"></a>

```java
public ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>>

---


### ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference <a name="ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference;

new ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomainInput">faultDomainInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `faultDomainInput`<sup>Optional</sup> <a name="faultDomainInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomainInput"></a>

```java
public java.util.List<java.lang.String> getFaultDomainInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain"></a>

```java
public java.util.List<java.lang.String> getFaultDomain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations">ContainerengineVirtualNodePoolPlacementConfigurations</a>

---


### ContainerengineVirtualNodePoolPodConfigurationOutputReference <a name="ContainerengineVirtualNodePoolPodConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolPodConfigurationOutputReference;

new ContainerengineVirtualNodePoolPodConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resetNsgIds">resetNsgIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resetNsgIds"></a>

```java
public void resetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIdsInput">nsgIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIdsInput"></a>

```java
public java.util.List<java.lang.String> getNsgIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue"></a>

```java
public ContainerengineVirtualNodePoolPodConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---


### ContainerengineVirtualNodePoolTaintsList <a name="ContainerengineVirtualNodePoolTaintsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolTaintsList;

new ContainerengineVirtualNodePoolTaintsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get"></a>

```java
public ContainerengineVirtualNodePoolTaintsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>>

---


### ContainerengineVirtualNodePoolTaintsOutputReference <a name="ContainerengineVirtualNodePoolTaintsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolTaintsOutputReference;

new ContainerengineVirtualNodePoolTaintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetEffect">resetEffect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEffect` <a name="resetEffect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetEffect"></a>

```java
public void resetEffect()
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effectInput">effectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effect">effect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effectInput"></a>

```java
public java.lang.String getEffectInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `effect`<sup>Required</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effect"></a>

```java
public java.lang.String getEffect();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints">ContainerengineVirtualNodePoolTaints</a>

---


### ContainerengineVirtualNodePoolTimeoutsOutputReference <a name="ContainerengineVirtualNodePoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolTimeoutsOutputReference;

new ContainerengineVirtualNodePoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

---


### ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference <a name="ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.containerengine_virtual_node_pool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference;

new ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue"></a>

```java
public ContainerengineVirtualNodePoolVirtualNodeTags getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---



