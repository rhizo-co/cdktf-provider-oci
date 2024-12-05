# `visualBuilderVbInstance` Submodule <a name="`visualBuilderVbInstance` Submodule" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VisualBuilderVbInstance <a name="VisualBuilderVbInstance" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance oci_visual_builder_vb_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstance;

VisualBuilderVbInstance.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .nodeCount(java.lang.Number)
//  .alternateCustomEndpoints(IResolvable)
//  .alternateCustomEndpoints(java.util.List<VisualBuilderVbInstanceAlternateCustomEndpoints>)
//  .consumptionModel(java.lang.String)
//  .customEndpoint(VisualBuilderVbInstanceCustomEndpoint)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .idcsOpenId(java.lang.String)
//  .isVisualBuilderEnabled(java.lang.Boolean)
//  .isVisualBuilderEnabled(IResolvable)
//  .timeouts(VisualBuilderVbInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#compartment_id VisualBuilderVbInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#display_name VisualBuilderVbInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#node_count VisualBuilderVbInstance#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>></code> | alternate_custom_endpoints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.consumptionModel">consumptionModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#consumption_model VisualBuilderVbInstance#consumption_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#defined_tags VisualBuilderVbInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#freeform_tags VisualBuilderVbInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.idcsOpenId">idcsOpenId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#idcs_open_id VisualBuilderVbInstance#idcs_open_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#is_visual_builder_enabled VisualBuilderVbInstance#is_visual_builder_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#compartment_id VisualBuilderVbInstance#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#display_name VisualBuilderVbInstance#display_name}.

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#node_count VisualBuilderVbInstance#node_count}.

---

##### `alternateCustomEndpoints`<sup>Optional</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.alternateCustomEndpoints"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>>

alternate_custom_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#alternate_custom_endpoints VisualBuilderVbInstance#alternate_custom_endpoints}

---

##### `consumptionModel`<sup>Optional</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.consumptionModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#consumption_model VisualBuilderVbInstance#consumption_model}.

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.customEndpoint"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#custom_endpoint VisualBuilderVbInstance#custom_endpoint}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#defined_tags VisualBuilderVbInstance#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#freeform_tags VisualBuilderVbInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcsOpenId`<sup>Optional</sup> <a name="idcsOpenId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.idcsOpenId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#idcs_open_id VisualBuilderVbInstance#idcs_open_id}.

---

##### `isVisualBuilderEnabled`<sup>Optional</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.isVisualBuilderEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#is_visual_builder_enabled VisualBuilderVbInstance#is_visual_builder_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#timeouts VisualBuilderVbInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putAlternateCustomEndpoints">putAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putCustomEndpoint">putCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetAlternateCustomEndpoints">resetAlternateCustomEndpoints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetConsumptionModel">resetConsumptionModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetIdcsOpenId">resetIdcsOpenId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetIsVisualBuilderEnabled">resetIsVisualBuilderEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAlternateCustomEndpoints` <a name="putAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putAlternateCustomEndpoints"></a>

```java
public void putAlternateCustomEndpoints(IResolvable OR java.util.List<VisualBuilderVbInstanceAlternateCustomEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putAlternateCustomEndpoints.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>>

---

##### `putCustomEndpoint` <a name="putCustomEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putCustomEndpoint"></a>

```java
public void putCustomEndpoint(VisualBuilderVbInstanceCustomEndpoint value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putTimeouts"></a>

```java
public void putTimeouts(VisualBuilderVbInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a>

---

##### `resetAlternateCustomEndpoints` <a name="resetAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetAlternateCustomEndpoints"></a>

```java
public void resetAlternateCustomEndpoints()
```

##### `resetConsumptionModel` <a name="resetConsumptionModel" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetConsumptionModel"></a>

```java
public void resetConsumptionModel()
```

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetCustomEndpoint"></a>

```java
public void resetCustomEndpoint()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetId"></a>

```java
public void resetId()
```

##### `resetIdcsOpenId` <a name="resetIdcsOpenId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetIdcsOpenId"></a>

```java
public void resetIdcsOpenId()
```

##### `resetIsVisualBuilderEnabled` <a name="resetIsVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetIsVisualBuilderEnabled"></a>

```java
public void resetIsVisualBuilderEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VisualBuilderVbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstance;

VisualBuilderVbInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstance;

VisualBuilderVbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstance;

VisualBuilderVbInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstance;

VisualBuilderVbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VisualBuilderVbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VisualBuilderVbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VisualBuilderVbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VisualBuilderVbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VisualBuilderVbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList">VisualBuilderVbInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList">VisualBuilderVbInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference">VisualBuilderVbInstanceCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsInfo">idcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList">VisualBuilderVbInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.instanceUrl">instanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.managementNatGatewayIp">managementNatGatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.managementVcnId">managementVcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.serviceNatGatewayIp">serviceNatGatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.serviceVcnId">serviceVcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.stateMessage">stateMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference">VisualBuilderVbInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.alternateCustomEndpointsInput">alternateCustomEndpointsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.consumptionModelInput">consumptionModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.customEndpointInput">customEndpointInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsOpenIdInput">idcsOpenIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.isVisualBuilderEnabledInput">isVisualBuilderEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.consumptionModel">consumptionModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsOpenId">idcsOpenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alternateCustomEndpoints`<sup>Required</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.alternateCustomEndpoints"></a>

```java
public VisualBuilderVbInstanceAlternateCustomEndpointsList getAlternateCustomEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList">VisualBuilderVbInstanceAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.attachments"></a>

```java
public VisualBuilderVbInstanceAttachmentsList getAttachments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList">VisualBuilderVbInstanceAttachmentsList</a>

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.customEndpoint"></a>

```java
public VisualBuilderVbInstanceCustomEndpointOutputReference getCustomEndpoint();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference">VisualBuilderVbInstanceCustomEndpointOutputReference</a>

---

##### `idcsInfo`<sup>Required</sup> <a name="idcsInfo" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsInfo"></a>

```java
public VisualBuilderVbInstanceIdcsInfoList getIdcsInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList">VisualBuilderVbInstanceIdcsInfoList</a>

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.instanceUrl"></a>

```java
public java.lang.String getInstanceUrl();
```

- *Type:* java.lang.String

---

##### `managementNatGatewayIp`<sup>Required</sup> <a name="managementNatGatewayIp" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.managementNatGatewayIp"></a>

```java
public java.lang.String getManagementNatGatewayIp();
```

- *Type:* java.lang.String

---

##### `managementVcnId`<sup>Required</sup> <a name="managementVcnId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.managementVcnId"></a>

```java
public java.lang.String getManagementVcnId();
```

- *Type:* java.lang.String

---

##### `serviceNatGatewayIp`<sup>Required</sup> <a name="serviceNatGatewayIp" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.serviceNatGatewayIp"></a>

```java
public java.lang.String getServiceNatGatewayIp();
```

- *Type:* java.lang.String

---

##### `serviceVcnId`<sup>Required</sup> <a name="serviceVcnId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.serviceVcnId"></a>

```java
public java.lang.String getServiceVcnId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.stateMessage"></a>

```java
public java.lang.String getStateMessage();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeouts"></a>

```java
public VisualBuilderVbInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference">VisualBuilderVbInstanceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `alternateCustomEndpointsInput`<sup>Optional</sup> <a name="alternateCustomEndpointsInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.alternateCustomEndpointsInput"></a>

```java
public java.lang.Object getAlternateCustomEndpointsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `consumptionModelInput`<sup>Optional</sup> <a name="consumptionModelInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.consumptionModelInput"></a>

```java
public java.lang.String getConsumptionModelInput();
```

- *Type:* java.lang.String

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.customEndpointInput"></a>

```java
public VisualBuilderVbInstanceCustomEndpoint getCustomEndpointInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idcsOpenIdInput`<sup>Optional</sup> <a name="idcsOpenIdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsOpenIdInput"></a>

```java
public java.lang.String getIdcsOpenIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isVisualBuilderEnabledInput`<sup>Optional</sup> <a name="isVisualBuilderEnabledInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.isVisualBuilderEnabledInput"></a>

```java
public java.lang.Object getIsVisualBuilderEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `consumptionModel`<sup>Required</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.consumptionModel"></a>

```java
public java.lang.String getConsumptionModel();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsOpenId`<sup>Required</sup> <a name="idcsOpenId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.idcsOpenId"></a>

```java
public java.lang.String getIdcsOpenId();
```

- *Type:* java.lang.String

---

##### `isVisualBuilderEnabled`<sup>Required</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.isVisualBuilderEnabled"></a>

```java
public java.lang.Object getIsVisualBuilderEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VisualBuilderVbInstanceAlternateCustomEndpoints <a name="VisualBuilderVbInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceAlternateCustomEndpoints;

VisualBuilderVbInstanceAlternateCustomEndpoints.builder()
    .hostname(java.lang.String)
//  .certificateSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}.

---

##### `certificateSecretId`<sup>Optional</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}.

---

### VisualBuilderVbInstanceAttachments <a name="VisualBuilderVbInstanceAttachments" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceAttachments;

VisualBuilderVbInstanceAttachments.builder()
    .build();
```


### VisualBuilderVbInstanceConfig <a name="VisualBuilderVbInstanceConfig" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceConfig;

VisualBuilderVbInstanceConfig.builder()
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
    .displayName(java.lang.String)
    .nodeCount(java.lang.Number)
//  .alternateCustomEndpoints(IResolvable)
//  .alternateCustomEndpoints(java.util.List<VisualBuilderVbInstanceAlternateCustomEndpoints>)
//  .consumptionModel(java.lang.String)
//  .customEndpoint(VisualBuilderVbInstanceCustomEndpoint)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .idcsOpenId(java.lang.String)
//  .isVisualBuilderEnabled(java.lang.Boolean)
//  .isVisualBuilderEnabled(IResolvable)
//  .timeouts(VisualBuilderVbInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#compartment_id VisualBuilderVbInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#display_name VisualBuilderVbInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#node_count VisualBuilderVbInstance#node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>></code> | alternate_custom_endpoints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.consumptionModel">consumptionModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#consumption_model VisualBuilderVbInstance#consumption_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#defined_tags VisualBuilderVbInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#freeform_tags VisualBuilderVbInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.idcsOpenId">idcsOpenId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#idcs_open_id VisualBuilderVbInstance#idcs_open_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#is_visual_builder_enabled VisualBuilderVbInstance#is_visual_builder_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#compartment_id VisualBuilderVbInstance#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#display_name VisualBuilderVbInstance#display_name}.

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#node_count VisualBuilderVbInstance#node_count}.

---

##### `alternateCustomEndpoints`<sup>Optional</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.alternateCustomEndpoints"></a>

```java
public java.lang.Object getAlternateCustomEndpoints();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>>

alternate_custom_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#alternate_custom_endpoints VisualBuilderVbInstance#alternate_custom_endpoints}

---

##### `consumptionModel`<sup>Optional</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.consumptionModel"></a>

```java
public java.lang.String getConsumptionModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#consumption_model VisualBuilderVbInstance#consumption_model}.

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.customEndpoint"></a>

```java
public VisualBuilderVbInstanceCustomEndpoint getCustomEndpoint();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#custom_endpoint VisualBuilderVbInstance#custom_endpoint}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#defined_tags VisualBuilderVbInstance#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#freeform_tags VisualBuilderVbInstance#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#id VisualBuilderVbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcsOpenId`<sup>Optional</sup> <a name="idcsOpenId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.idcsOpenId"></a>

```java
public java.lang.String getIdcsOpenId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#idcs_open_id VisualBuilderVbInstance#idcs_open_id}.

---

##### `isVisualBuilderEnabled`<sup>Optional</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.isVisualBuilderEnabled"></a>

```java
public java.lang.Object getIsVisualBuilderEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#is_visual_builder_enabled VisualBuilderVbInstance#is_visual_builder_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceConfig.property.timeouts"></a>

```java
public VisualBuilderVbInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#timeouts VisualBuilderVbInstance#timeouts}

---

### VisualBuilderVbInstanceCustomEndpoint <a name="VisualBuilderVbInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceCustomEndpoint;

VisualBuilderVbInstanceCustomEndpoint.builder()
    .hostname(java.lang.String)
//  .certificateSecretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#hostname VisualBuilderVbInstance#hostname}.

---

##### `certificateSecretId`<sup>Optional</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#certificate_secret_id VisualBuilderVbInstance#certificate_secret_id}.

---

### VisualBuilderVbInstanceIdcsInfo <a name="VisualBuilderVbInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceIdcsInfo;

VisualBuilderVbInstanceIdcsInfo.builder()
    .build();
```


### VisualBuilderVbInstanceTimeouts <a name="VisualBuilderVbInstanceTimeouts" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceTimeouts;

VisualBuilderVbInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#create VisualBuilderVbInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#delete VisualBuilderVbInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#update VisualBuilderVbInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#create VisualBuilderVbInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#delete VisualBuilderVbInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/visual_builder_vb_instance#update VisualBuilderVbInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VisualBuilderVbInstanceAlternateCustomEndpointsList <a name="VisualBuilderVbInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceAlternateCustomEndpointsList;

new VisualBuilderVbInstanceAlternateCustomEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.get"></a>

```java
public VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>>

---


### VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference <a name="VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference;

new VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId">resetCertificateSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateSecretId` <a name="resetCertificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resetCertificateSecretId"></a>

```java
public void resetCertificateSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput">certificateSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```java
public java.lang.Number getCertificateSecretVersion();
```

- *Type:* java.lang.Number

---

##### `certificateSecretIdInput`<sup>Optional</sup> <a name="certificateSecretIdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretIdInput"></a>

```java
public java.lang.String getCertificateSecretIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAlternateCustomEndpoints">VisualBuilderVbInstanceAlternateCustomEndpoints</a>

---


### VisualBuilderVbInstanceAttachmentsList <a name="VisualBuilderVbInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceAttachmentsList;

new VisualBuilderVbInstanceAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.get"></a>

```java
public VisualBuilderVbInstanceAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VisualBuilderVbInstanceAttachmentsOutputReference <a name="VisualBuilderVbInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceAttachmentsOutputReference;

new VisualBuilderVbInstanceAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.isImplicit">isImplicit</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetInstanceUrl">targetInstanceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetRole">targetRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetServiceType">targetServiceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachments">VisualBuilderVbInstanceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.isImplicit"></a>

```java
public IResolvable getIsImplicit();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `targetInstanceUrl`<sup>Required</sup> <a name="targetInstanceUrl" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```java
public java.lang.String getTargetInstanceUrl();
```

- *Type:* java.lang.String

---

##### `targetRole`<sup>Required</sup> <a name="targetRole" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetRole"></a>

```java
public java.lang.String getTargetRole();
```

- *Type:* java.lang.String

---

##### `targetServiceType`<sup>Required</sup> <a name="targetServiceType" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```java
public java.lang.String getTargetServiceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachmentsOutputReference.property.internalValue"></a>

```java
public VisualBuilderVbInstanceAttachments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceAttachments">VisualBuilderVbInstanceAttachments</a>

---


### VisualBuilderVbInstanceCustomEndpointOutputReference <a name="VisualBuilderVbInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceCustomEndpointOutputReference;

new VisualBuilderVbInstanceCustomEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resetCertificateSecretId">resetCertificateSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateSecretId` <a name="resetCertificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.resetCertificateSecretId"></a>

```java
public void resetCertificateSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretIdInput">certificateSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```java
public java.lang.Number getCertificateSecretVersion();
```

- *Type:* java.lang.Number

---

##### `certificateSecretIdInput`<sup>Optional</sup> <a name="certificateSecretIdInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretIdInput"></a>

```java
public java.lang.String getCertificateSecretIdInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```java
public java.lang.String getCertificateSecretId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpointOutputReference.property.internalValue"></a>

```java
public VisualBuilderVbInstanceCustomEndpoint getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceCustomEndpoint">VisualBuilderVbInstanceCustomEndpoint</a>

---


### VisualBuilderVbInstanceIdcsInfoList <a name="VisualBuilderVbInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceIdcsInfoList;

new VisualBuilderVbInstanceIdcsInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.get"></a>

```java
public VisualBuilderVbInstanceIdcsInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VisualBuilderVbInstanceIdcsInfoOutputReference <a name="VisualBuilderVbInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceIdcsInfoOutputReference;

new VisualBuilderVbInstanceIdcsInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">idcsAppDisplayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppId">idcsAppId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">idcsAppLocationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppName">idcsAppName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instancePrimaryAudienceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfo">VisualBuilderVbInstanceIdcsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idcsAppDisplayName`<sup>Required</sup> <a name="idcsAppDisplayName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```java
public java.lang.String getIdcsAppDisplayName();
```

- *Type:* java.lang.String

---

##### `idcsAppId`<sup>Required</sup> <a name="idcsAppId" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```java
public java.lang.String getIdcsAppId();
```

- *Type:* java.lang.String

---

##### `idcsAppLocationUrl`<sup>Required</sup> <a name="idcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```java
public java.lang.String getIdcsAppLocationUrl();
```

- *Type:* java.lang.String

---

##### `idcsAppName`<sup>Required</sup> <a name="idcsAppName" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```java
public java.lang.String getIdcsAppName();
```

- *Type:* java.lang.String

---

##### `instancePrimaryAudienceUrl`<sup>Required</sup> <a name="instancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```java
public java.lang.String getInstancePrimaryAudienceUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfoOutputReference.property.internalValue"></a>

```java
public VisualBuilderVbInstanceIdcsInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceIdcsInfo">VisualBuilderVbInstanceIdcsInfo</a>

---


### VisualBuilderVbInstanceTimeoutsOutputReference <a name="VisualBuilderVbInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.visual_builder_vb_instance.VisualBuilderVbInstanceTimeoutsOutputReference;

new VisualBuilderVbInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.visualBuilderVbInstance.VisualBuilderVbInstanceTimeouts">VisualBuilderVbInstanceTimeouts</a>

---



