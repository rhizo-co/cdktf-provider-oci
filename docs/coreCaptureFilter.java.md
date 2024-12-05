# `coreCaptureFilter` Submodule <a name="`coreCaptureFilter` Submodule" id="rhizo-co-terraform-provider-oci.coreCaptureFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCaptureFilter <a name="CoreCaptureFilter" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter oci_core_capture_filter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilter;

CoreCaptureFilter.Builder.create(Construct scope, java.lang.String id)
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
    .filterType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .flowLogCaptureFilterRules(IResolvable)
//  .flowLogCaptureFilterRules(java.util.List<CoreCaptureFilterFlowLogCaptureFilterRules>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CoreCaptureFilterTimeouts)
//  .vtapCaptureFilterRules(IResolvable)
//  .vtapCaptureFilterRules(java.util.List<CoreCaptureFilterVtapCaptureFilterRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.flowLogCaptureFilterRules">flowLogCaptureFilterRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>></code> | flow_log_capture_filter_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.vtapCaptureFilterRules">vtapCaptureFilterRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>></code> | vtap_capture_filter_rules block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}.

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.filterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}.

---

##### `flowLogCaptureFilterRules`<sup>Optional</sup> <a name="flowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.flowLogCaptureFilterRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>>

flow_log_capture_filter_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_capture_filter_rules CoreCaptureFilter#flow_log_capture_filter_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#timeouts CoreCaptureFilter#timeouts}

---

##### `vtapCaptureFilterRules`<sup>Optional</sup> <a name="vtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.Initializer.parameter.vtapCaptureFilterRules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>>

vtap_capture_filter_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#vtap_capture_filter_rules CoreCaptureFilter#vtap_capture_filter_rules}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules">putFlowLogCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules">putVtapCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFlowLogCaptureFilterRules">resetFlowLogCaptureFilterRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetVtapCaptureFilterRules">resetVtapCaptureFilterRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFlowLogCaptureFilterRules` <a name="putFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules"></a>

```java
public void putFlowLogCaptureFilterRules(IResolvable OR java.util.List<CoreCaptureFilterFlowLogCaptureFilterRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putFlowLogCaptureFilterRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts"></a>

```java
public void putTimeouts(CoreCaptureFilterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

---

##### `putVtapCaptureFilterRules` <a name="putVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules"></a>

```java
public void putVtapCaptureFilterRules(IResolvable OR java.util.List<CoreCaptureFilterVtapCaptureFilterRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.putVtapCaptureFilterRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFlowLogCaptureFilterRules` <a name="resetFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFlowLogCaptureFilterRules"></a>

```java
public void resetFlowLogCaptureFilterRules()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVtapCaptureFilterRules` <a name="resetVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.resetVtapCaptureFilterRules"></a>

```java
public void resetVtapCaptureFilterRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreCaptureFilter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilter;

CoreCaptureFilter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilter;

CoreCaptureFilter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilter;

CoreCaptureFilter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilter;

CoreCaptureFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreCaptureFilter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreCaptureFilter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreCaptureFilter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreCaptureFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreCaptureFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRules">flowLogCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList">CoreCaptureFilterFlowLogCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference">CoreCaptureFilterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRules">vtapCaptureFilterRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList">CoreCaptureFilterVtapCaptureFilterRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRulesInput">flowLogCaptureFilterRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRulesInput">vtapCaptureFilterRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flowLogCaptureFilterRules`<sup>Required</sup> <a name="flowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRules"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesList getFlowLogCaptureFilterRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList">CoreCaptureFilterFlowLogCaptureFilterRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeouts"></a>

```java
public CoreCaptureFilterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference">CoreCaptureFilterTimeoutsOutputReference</a>

---

##### `vtapCaptureFilterRules`<sup>Required</sup> <a name="vtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRules"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesList getVtapCaptureFilterRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList">CoreCaptureFilterVtapCaptureFilterRulesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `flowLogCaptureFilterRulesInput`<sup>Optional</sup> <a name="flowLogCaptureFilterRulesInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.flowLogCaptureFilterRulesInput"></a>

```java
public java.lang.Object getFlowLogCaptureFilterRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

---

##### `vtapCaptureFilterRulesInput`<sup>Optional</sup> <a name="vtapCaptureFilterRulesInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.vtapCaptureFilterRulesInput"></a>

```java
public java.lang.Object getVtapCaptureFilterRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCaptureFilterConfig <a name="CoreCaptureFilterConfig" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterConfig;

CoreCaptureFilterConfig.builder()
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
    .filterType(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .flowLogCaptureFilterRules(IResolvable)
//  .flowLogCaptureFilterRules(java.util.List<CoreCaptureFilterFlowLogCaptureFilterRules>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(CoreCaptureFilterTimeouts)
//  .vtapCaptureFilterRules(IResolvable)
//  .vtapCaptureFilterRules(java.util.List<CoreCaptureFilterVtapCaptureFilterRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.filterType">filterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.flowLogCaptureFilterRules">flowLogCaptureFilterRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>></code> | flow_log_capture_filter_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.vtapCaptureFilterRules">vtapCaptureFilterRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>></code> | vtap_capture_filter_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#compartment_id CoreCaptureFilter#compartment_id}.

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#filter_type CoreCaptureFilter#filter_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#defined_tags CoreCaptureFilter#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#display_name CoreCaptureFilter#display_name}.

---

##### `flowLogCaptureFilterRules`<sup>Optional</sup> <a name="flowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.flowLogCaptureFilterRules"></a>

```java
public java.lang.Object getFlowLogCaptureFilterRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>>

flow_log_capture_filter_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_capture_filter_rules CoreCaptureFilter#flow_log_capture_filter_rules}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#freeform_tags CoreCaptureFilter#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#id CoreCaptureFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.timeouts"></a>

```java
public CoreCaptureFilterTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#timeouts CoreCaptureFilter#timeouts}

---

##### `vtapCaptureFilterRules`<sup>Optional</sup> <a name="vtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterConfig.property.vtapCaptureFilterRules"></a>

```java
public java.lang.Object getVtapCaptureFilterRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>>

vtap_capture_filter_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#vtap_capture_filter_rules CoreCaptureFilter#vtap_capture_filter_rules}

---

### CoreCaptureFilterFlowLogCaptureFilterRules <a name="CoreCaptureFilterFlowLogCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRules;

CoreCaptureFilterFlowLogCaptureFilterRules.builder()
//  .destinationCidr(java.lang.String)
//  .flowLogType(java.lang.String)
//  .icmpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .priority(java.lang.Number)
//  .protocol(java.lang.String)
//  .ruleAction(java.lang.String)
//  .samplingRate(java.lang.Number)
//  .sourceCidr(java.lang.String)
//  .tcpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions)
//  .udpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.destinationCidr">destinationCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.flowLogType">flowLogType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_type CoreCaptureFilter#flow_log_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#is_enabled CoreCaptureFilter#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#priority CoreCaptureFilter#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#sampling_rate CoreCaptureFilter#sampling_rate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.sourceCidr">sourceCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | udp_options block. |

---

##### `destinationCidr`<sup>Optional</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.destinationCidr"></a>

```java
public java.lang.String getDestinationCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}.

---

##### `flowLogType`<sup>Optional</sup> <a name="flowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.flowLogType"></a>

```java
public java.lang.String getFlowLogType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#flow_log_type CoreCaptureFilter#flow_log_type}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.icmpOptions"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#icmp_options CoreCaptureFilter#icmp_options}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#is_enabled CoreCaptureFilter#is_enabled}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#priority CoreCaptureFilter#priority}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}.

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.ruleAction"></a>

```java
public java.lang.String getRuleAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}.

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#sampling_rate CoreCaptureFilter#sampling_rate}.

---

##### `sourceCidr`<sup>Optional</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.sourceCidr"></a>

```java
public java.lang.String getSourceCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.tcpOptions"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#tcp_options CoreCaptureFilter#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules.property.udpOptions"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#udp_options CoreCaptureFilter#udp_options}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions;

CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.builder()
    .type(java.lang.Number)
//  .code(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.code">code</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions;

CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.builder()
//  .destinationPortRange(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange)
//  .sourcePortRange(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.destinationPortRange"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions.property.sourcePortRange"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange;

CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange;

CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions;

CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.builder()
//  .destinationPortRange(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange)
//  .sourcePortRange(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.destinationPortRange"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions.property.sourcePortRange"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange;

CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange;

CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterTimeouts <a name="CoreCaptureFilterTimeouts" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterTimeouts;

CoreCaptureFilterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#create CoreCaptureFilter#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#delete CoreCaptureFilter#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#update CoreCaptureFilter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#create CoreCaptureFilter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#delete CoreCaptureFilter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#update CoreCaptureFilter#update}.

---

### CoreCaptureFilterVtapCaptureFilterRules <a name="CoreCaptureFilterVtapCaptureFilterRules" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRules;

CoreCaptureFilterVtapCaptureFilterRules.builder()
    .trafficDirection(java.lang.String)
//  .destinationCidr(java.lang.String)
//  .icmpOptions(CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions)
//  .protocol(java.lang.String)
//  .ruleAction(java.lang.String)
//  .sourceCidr(java.lang.String)
//  .tcpOptions(CoreCaptureFilterVtapCaptureFilterRulesTcpOptions)
//  .udpOptions(CoreCaptureFilterVtapCaptureFilterRulesUdpOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.trafficDirection">trafficDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#traffic_direction CoreCaptureFilter#traffic_direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.destinationCidr">destinationCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.sourceCidr">sourceCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | udp_options block. |

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.trafficDirection"></a>

```java
public java.lang.String getTrafficDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#traffic_direction CoreCaptureFilter#traffic_direction}.

---

##### `destinationCidr`<sup>Optional</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.destinationCidr"></a>

```java
public java.lang.String getDestinationCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_cidr CoreCaptureFilter#destination_cidr}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.icmpOptions"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#icmp_options CoreCaptureFilter#icmp_options}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#protocol CoreCaptureFilter#protocol}.

---

##### `ruleAction`<sup>Optional</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.ruleAction"></a>

```java
public java.lang.String getRuleAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#rule_action CoreCaptureFilter#rule_action}.

---

##### `sourceCidr`<sup>Optional</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.sourceCidr"></a>

```java
public java.lang.String getSourceCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_cidr CoreCaptureFilter#source_cidr}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.tcpOptions"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptions getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#tcp_options CoreCaptureFilter#tcp_options}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules.property.udpOptions"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptions getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#udp_options CoreCaptureFilter#udp_options}

---

### CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions;

CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.builder()
    .type(java.lang.Number)
//  .code(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.type">type</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.code">code</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#type CoreCaptureFilter#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#code CoreCaptureFilter#code}.

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions;

CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.builder()
//  .destinationPortRange(CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange)
//  .sourcePortRange(CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.destinationPortRange"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions.property.sourcePortRange"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange;

CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange;

CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptions <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions;

CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.builder()
//  .destinationPortRange(CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange)
//  .sourcePortRange(CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.destinationPortRange"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#destination_port_range CoreCaptureFilter#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions.property.sourcePortRange"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#source_port_range CoreCaptureFilter#source_port_range}

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange;

CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange;

CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.builder()
    .max(java.lang.Number)
    .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#max CoreCaptureFilter#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_capture_filter#min CoreCaptureFilter#min}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference;

new CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.resetCode"></a>

```java
public void resetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesList <a name="CoreCaptureFilterFlowLogCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesList;

new CoreCaptureFilterFlowLogCaptureFilterRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference;

new CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetDestinationCidr">resetDestinationCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetFlowLogType">resetFlowLogType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetRuleAction">resetRuleAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSamplingRate">resetSamplingRate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSourceCidr">resetSourceCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions"></a>

```java
public void putIcmpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions"></a>

```java
public void putTcpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions"></a>

```java
public void putUdpOptions(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---

##### `resetDestinationCidr` <a name="resetDestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetDestinationCidr"></a>

```java
public void resetDestinationCidr()
```

##### `resetFlowLogType` <a name="resetFlowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetFlowLogType"></a>

```java
public void resetFlowLogType()
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIcmpOptions"></a>

```java
public void resetIcmpOptions()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetPriority` <a name="resetPriority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetRuleAction` <a name="resetRuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetRuleAction"></a>

```java
public void resetRuleAction()
```

##### `resetSamplingRate` <a name="resetSamplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSamplingRate"></a>

```java
public void resetSamplingRate()
```

##### `resetSourceCidr` <a name="resetSourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetSourceCidr"></a>

```java
public void resetSourceCidr()
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetTcpOptions"></a>

```java
public void resetTcpOptions()
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.resetUdpOptions"></a>

```java
public void resetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidrInput">destinationCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogTypeInput">flowLogTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleActionInput">ruleActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRateInput">samplingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidrInput">sourceCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogType">flowLogType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRate">samplingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidr">sourceCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptions"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference</a>

---

##### `destinationCidrInput`<sup>Optional</sup> <a name="destinationCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidrInput"></a>

```java
public java.lang.String getDestinationCidrInput();
```

- *Type:* java.lang.String

---

##### `flowLogTypeInput`<sup>Optional</sup> <a name="flowLogTypeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogTypeInput"></a>

```java
public java.lang.String getFlowLogTypeInput();
```

- *Type:* java.lang.String

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.icmpOptionsInput"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions getIcmpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesIcmpOptions</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `ruleActionInput`<sup>Optional</sup> <a name="ruleActionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleActionInput"></a>

```java
public java.lang.String getRuleActionInput();
```

- *Type:* java.lang.String

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRateInput"></a>

```java
public java.lang.Number getSamplingRateInput();
```

- *Type:* java.lang.Number

---

##### `sourceCidrInput`<sup>Optional</sup> <a name="sourceCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidrInput"></a>

```java
public java.lang.String getSourceCidrInput();
```

- *Type:* java.lang.String

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.tcpOptionsInput"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions getTcpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.udpOptionsInput"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions getUdpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```java
public java.lang.String getDestinationCidr();
```

- *Type:* java.lang.String

---

##### `flowLogType`<sup>Required</sup> <a name="flowLogType" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.flowLogType"></a>

```java
public java.lang.String getFlowLogType();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.ruleAction"></a>

```java
public java.lang.String getRuleAction();
```

- *Type:* java.lang.String

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.samplingRate"></a>

```java
public java.lang.Number getSamplingRate();
```

- *Type:* java.lang.Number

---

##### `sourceCidr`<sup>Required</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```java
public java.lang.String getSourceCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRules">CoreCaptureFilterFlowLogCaptureFilterRules</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange"></a>

```java
public void putDestinationPortRange(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange"></a>

```java
public void resetDestinationPortRange()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange getDestinationPortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference;

new CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange"></a>

```java
public void putDestinationPortRange(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange"></a>

```java
public void resetDestinationPortRange()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange getDestinationPortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptions</a>

---


### CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference;

new CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterFlowLogCaptureFilterRulesUdpOptionsSourcePortRange</a>

---


### CoreCaptureFilterTimeoutsOutputReference <a name="CoreCaptureFilterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterTimeoutsOutputReference;

new CoreCaptureFilterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterTimeouts">CoreCaptureFilterTimeouts</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference;

new CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.resetCode"></a>

```java
public void resetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type">type</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.codeInput"></a>

```java
public java.lang.Number getCodeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.typeInput"></a>

```java
public java.lang.Number getTypeInput();
```

- *Type:* java.lang.Number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.type"></a>

```java
public java.lang.Number getType();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesList <a name="CoreCaptureFilterVtapCaptureFilterRulesList" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesList;

new CoreCaptureFilterVtapCaptureFilterRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>>

---


### CoreCaptureFilterVtapCaptureFilterRulesOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference;

new CoreCaptureFilterVtapCaptureFilterRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetDestinationCidr">resetDestinationCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetRuleAction">resetRuleAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetSourceCidr">resetSourceCidr</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions"></a>

```java
public void putIcmpOptions(CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions"></a>

```java
public void putTcpOptions(CoreCaptureFilterVtapCaptureFilterRulesTcpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions"></a>

```java
public void putUdpOptions(CoreCaptureFilterVtapCaptureFilterRulesUdpOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---

##### `resetDestinationCidr` <a name="resetDestinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetDestinationCidr"></a>

```java
public void resetDestinationCidr()
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetIcmpOptions"></a>

```java
public void resetIcmpOptions()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetRuleAction` <a name="resetRuleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetRuleAction"></a>

```java
public void resetRuleAction()
```

##### `resetSourceCidr` <a name="resetSourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetSourceCidr"></a>

```java
public void resetSourceCidr()
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetTcpOptions"></a>

```java
public void resetTcpOptions()
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.resetUdpOptions"></a>

```java
public void resetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidrInput">destinationCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleActionInput">ruleActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidrInput">sourceCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirectionInput">trafficDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleAction">ruleAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidr">sourceCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirection">trafficDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptions"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference getIcmpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptionsOutputReference</a>

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptions"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference getTcpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptions"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference getUdpOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference</a>

---

##### `destinationCidrInput`<sup>Optional</sup> <a name="destinationCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidrInput"></a>

```java
public java.lang.String getDestinationCidrInput();
```

- *Type:* java.lang.String

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.icmpOptionsInput"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions getIcmpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions">CoreCaptureFilterVtapCaptureFilterRulesIcmpOptions</a>

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `ruleActionInput`<sup>Optional</sup> <a name="ruleActionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleActionInput"></a>

```java
public java.lang.String getRuleActionInput();
```

- *Type:* java.lang.String

---

##### `sourceCidrInput`<sup>Optional</sup> <a name="sourceCidrInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidrInput"></a>

```java
public java.lang.String getSourceCidrInput();
```

- *Type:* java.lang.String

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.tcpOptionsInput"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptions getTcpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---

##### `trafficDirectionInput`<sup>Optional</sup> <a name="trafficDirectionInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirectionInput"></a>

```java
public java.lang.String getTrafficDirectionInput();
```

- *Type:* java.lang.String

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.udpOptionsInput"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptions getUdpOptionsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.destinationCidr"></a>

```java
public java.lang.String getDestinationCidr();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `ruleAction`<sup>Required</sup> <a name="ruleAction" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.ruleAction"></a>

```java
public java.lang.String getRuleAction();
```

- *Type:* java.lang.String

---

##### `sourceCidr`<sup>Required</sup> <a name="sourceCidr" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.sourceCidr"></a>

```java
public java.lang.String getSourceCidr();
```

- *Type:* java.lang.String

---

##### `trafficDirection`<sup>Required</sup> <a name="trafficDirection" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.trafficDirection"></a>

```java
public java.lang.String getTrafficDirection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRules">CoreCaptureFilterVtapCaptureFilterRules</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange"></a>

```java
public void putDestinationPortRange(CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetDestinationPortRange"></a>

```java
public void resetDestinationPortRange()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRange"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.destinationPortRangeInput"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange getDestinationPortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptions">CoreCaptureFilterVtapCaptureFilterRulesTcpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference;

new CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesTcpOptionsSourcePortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange"></a>

```java
public void putDestinationPortRange(CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```java
public void putSourcePortRange(CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetDestinationPortRange"></a>

```java
public void resetDestinationPortRange()
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```java
public void resetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRange"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference getDestinationPortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference getSourcePortRange();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.destinationPortRangeInput"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange getDestinationPortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange getSourcePortRangeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptions">CoreCaptureFilterVtapCaptureFilterRulesUdpOptions</a>

---


### CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_capture_filter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference;

new CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```java
public CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCaptureFilter.CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange">CoreCaptureFilterVtapCaptureFilterRulesUdpOptionsSourcePortRange</a>

---



