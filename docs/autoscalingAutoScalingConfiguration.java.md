# `autoscalingAutoScalingConfiguration` Submodule <a name="`autoscalingAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingAutoScalingConfiguration <a name="AutoscalingAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration oci_autoscaling_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfiguration;

AutoscalingAutoScalingConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .autoScalingResources(AutoscalingAutoScalingConfigurationAutoScalingResources)
    .compartmentId(java.lang.String)
    .policies(IResolvable)
    .policies(java.util.List<AutoscalingAutoScalingConfigurationPolicies>)
//  .coolDownInSeconds(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .timeouts(AutoscalingAutoScalingConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.autoScalingResources">autoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | auto_scaling_resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.policies">policies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>></code> | policies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.coolDownInSeconds">coolDownInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoScalingResources`<sup>Required</sup> <a name="autoScalingResources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.autoScalingResources"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

auto_scaling_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#auto_scaling_resources AutoscalingAutoScalingConfiguration#auto_scaling_resources}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}.

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.policies"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>>

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#policies AutoscalingAutoScalingConfiguration#policies}

---

##### `coolDownInSeconds`<sup>Optional</sup> <a name="coolDownInSeconds" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.coolDownInSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timeouts AutoscalingAutoScalingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putAutoScalingResources">putAutoScalingResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetCoolDownInSeconds">resetCoolDownInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoScalingResources` <a name="putAutoScalingResources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putAutoScalingResources"></a>

```java
public void putAutoScalingResources(AutoscalingAutoScalingConfigurationAutoScalingResources value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putAutoScalingResources.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

---

##### `putPolicies` <a name="putPolicies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putPolicies"></a>

```java
public void putPolicies(IResolvable OR java.util.List<AutoscalingAutoScalingConfigurationPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putTimeouts"></a>

```java
public void putTimeouts(AutoscalingAutoScalingConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>

---

##### `resetCoolDownInSeconds` <a name="resetCoolDownInSeconds" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetCoolDownInSeconds"></a>

```java
public void resetCoolDownInSeconds()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfiguration;

AutoscalingAutoScalingConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfiguration;

AutoscalingAutoScalingConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfiguration;

AutoscalingAutoScalingConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfiguration;

AutoscalingAutoScalingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AutoscalingAutoScalingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AutoscalingAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AutoscalingAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.autoScalingResources">autoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference">AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.maxResourceCount">maxResourceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.minResourceCount">minResourceCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.policies">policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList">AutoscalingAutoScalingConfigurationPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference">AutoscalingAutoScalingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.autoScalingResourcesInput">autoScalingResourcesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.coolDownInSecondsInput">coolDownInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.policiesInput">policiesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.coolDownInSeconds">coolDownInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoScalingResources`<sup>Required</sup> <a name="autoScalingResources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.autoScalingResources"></a>

```java
public AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference getAutoScalingResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference">AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference</a>

---

##### `maxResourceCount`<sup>Required</sup> <a name="maxResourceCount" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.maxResourceCount"></a>

```java
public java.lang.Number getMaxResourceCount();
```

- *Type:* java.lang.Number

---

##### `minResourceCount`<sup>Required</sup> <a name="minResourceCount" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.minResourceCount"></a>

```java
public java.lang.Number getMinResourceCount();
```

- *Type:* java.lang.Number

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.policies"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesList getPolicies();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList">AutoscalingAutoScalingConfigurationPoliciesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeouts"></a>

```java
public AutoscalingAutoScalingConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference">AutoscalingAutoScalingConfigurationTimeoutsOutputReference</a>

---

##### `autoScalingResourcesInput`<sup>Optional</sup> <a name="autoScalingResourcesInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.autoScalingResourcesInput"></a>

```java
public AutoscalingAutoScalingConfigurationAutoScalingResources getAutoScalingResourcesInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `coolDownInSecondsInput`<sup>Optional</sup> <a name="coolDownInSecondsInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.coolDownInSecondsInput"></a>

```java
public java.lang.Number getCoolDownInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.policiesInput"></a>

```java
public java.lang.Object getPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `coolDownInSeconds`<sup>Required</sup> <a name="coolDownInSeconds" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.coolDownInSeconds"></a>

```java
public java.lang.Number getCoolDownInSeconds();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingAutoScalingConfigurationAutoScalingResources <a name="AutoscalingAutoScalingConfigurationAutoScalingResources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationAutoScalingResources;

AutoscalingAutoScalingConfigurationAutoScalingResources.builder()
    .id(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

### AutoscalingAutoScalingConfigurationConfig <a name="AutoscalingAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationConfig;

AutoscalingAutoScalingConfigurationConfig.builder()
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
    .autoScalingResources(AutoscalingAutoScalingConfigurationAutoScalingResources)
    .compartmentId(java.lang.String)
    .policies(IResolvable)
    .policies(java.util.List<AutoscalingAutoScalingConfigurationPolicies>)
//  .coolDownInSeconds(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .timeouts(AutoscalingAutoScalingConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.autoScalingResources">autoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | auto_scaling_resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.policies">policies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>></code> | policies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.coolDownInSeconds">coolDownInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoScalingResources`<sup>Required</sup> <a name="autoScalingResources" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.autoScalingResources"></a>

```java
public AutoscalingAutoScalingConfigurationAutoScalingResources getAutoScalingResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

auto_scaling_resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#auto_scaling_resources AutoscalingAutoScalingConfiguration#auto_scaling_resources}

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#compartment_id AutoscalingAutoScalingConfiguration#compartment_id}.

---

##### `policies`<sup>Required</sup> <a name="policies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.policies"></a>

```java
public java.lang.Object getPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>>

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#policies AutoscalingAutoScalingConfiguration#policies}

---

##### `coolDownInSeconds`<sup>Optional</sup> <a name="coolDownInSeconds" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.coolDownInSeconds"></a>

```java
public java.lang.Number getCoolDownInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#cool_down_in_seconds AutoscalingAutoScalingConfiguration#cool_down_in_seconds}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#defined_tags AutoscalingAutoScalingConfiguration#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#freeform_tags AutoscalingAutoScalingConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#id AutoscalingAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationConfig.property.timeouts"></a>

```java
public AutoscalingAutoScalingConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timeouts AutoscalingAutoScalingConfiguration#timeouts}

---

### AutoscalingAutoScalingConfigurationPolicies <a name="AutoscalingAutoScalingConfigurationPolicies" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPolicies;

AutoscalingAutoScalingConfigurationPolicies.builder()
    .policyType(java.lang.String)
//  .capacity(AutoscalingAutoScalingConfigurationPoliciesCapacity)
//  .displayName(java.lang.String)
//  .executionSchedule(AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .resourceAction(AutoscalingAutoScalingConfigurationPoliciesResourceAction)
//  .rules(IResolvable)
//  .rules(java.util.List<AutoscalingAutoScalingConfigurationPoliciesRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.policyType">policyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#policy_type AutoscalingAutoScalingConfiguration#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | capacity block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.executionSchedule">executionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | execution_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.resourceAction">resourceAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | resource_action block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.rules">rules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>></code> | rules block. |

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#policy_type AutoscalingAutoScalingConfiguration#policy_type}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.capacity"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesCapacity getCapacity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#capacity AutoscalingAutoScalingConfiguration#capacity}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}.

---

##### `executionSchedule`<sup>Optional</sup> <a name="executionSchedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.executionSchedule"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule getExecutionSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

execution_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#execution_schedule AutoscalingAutoScalingConfiguration#execution_schedule}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#is_enabled AutoscalingAutoScalingConfiguration#is_enabled}.

---

##### `resourceAction`<sup>Optional</sup> <a name="resourceAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.resourceAction"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesResourceAction getResourceAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

resource_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#resource_action AutoscalingAutoScalingConfiguration#resource_action}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies.property.rules"></a>

```java
public java.lang.Object getRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>>

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#rules AutoscalingAutoScalingConfiguration#rules}

---

### AutoscalingAutoScalingConfigurationPoliciesCapacity <a name="AutoscalingAutoScalingConfigurationPoliciesCapacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesCapacity;

AutoscalingAutoScalingConfigurationPoliciesCapacity.builder()
//  .initial(java.lang.Number)
//  .max(java.lang.Number)
//  .min(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.initial">initial</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#initial AutoscalingAutoScalingConfiguration#initial}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.max">max</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#max AutoscalingAutoScalingConfiguration#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.min">min</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#min AutoscalingAutoScalingConfiguration#min}. |

---

##### `initial`<sup>Optional</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.initial"></a>

```java
public java.lang.Number getInitial();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#initial AutoscalingAutoScalingConfiguration#initial}.

---

##### `max`<sup>Optional</sup> <a name="max" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#max AutoscalingAutoScalingConfiguration#max}.

---

##### `min`<sup>Optional</sup> <a name="min" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#min AutoscalingAutoScalingConfiguration#min}.

---

### AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule <a name="AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule;

AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.builder()
    .expression(java.lang.String)
    .timezone(java.lang.String)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#expression AutoscalingAutoScalingConfiguration#expression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timezone AutoscalingAutoScalingConfiguration#timezone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#expression AutoscalingAutoScalingConfiguration#expression}.

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#timezone AutoscalingAutoScalingConfiguration#timezone}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

### AutoscalingAutoScalingConfigurationPoliciesResourceAction <a name="AutoscalingAutoScalingConfigurationPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesResourceAction;

AutoscalingAutoScalingConfigurationPoliciesResourceAction.builder()
    .action(java.lang.String)
    .actionType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.property.actionType">actionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action_type AutoscalingAutoScalingConfiguration#action_type}. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}.

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action_type AutoscalingAutoScalingConfiguration#action_type}.

---

### AutoscalingAutoScalingConfigurationPoliciesRules <a name="AutoscalingAutoScalingConfigurationPoliciesRules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRules;

AutoscalingAutoScalingConfigurationPoliciesRules.builder()
    .displayName(java.lang.String)
//  .action(AutoscalingAutoScalingConfigurationPoliciesRulesAction)
//  .metric(AutoscalingAutoScalingConfigurationPoliciesRulesMetric)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | action block. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | metric block. |

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#display_name AutoscalingAutoScalingConfiguration#display_name}.

---

##### `action`<sup>Optional</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.action"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesAction getAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#action AutoscalingAutoScalingConfiguration#action}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules.property.metric"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesMetric getMetric();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#metric AutoscalingAutoScalingConfiguration#metric}

---

### AutoscalingAutoScalingConfigurationPoliciesRulesAction <a name="AutoscalingAutoScalingConfigurationPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRulesAction;

AutoscalingAutoScalingConfigurationPoliciesRulesAction.builder()
//  .type(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#type AutoscalingAutoScalingConfiguration#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}.

---

### AutoscalingAutoScalingConfigurationPoliciesRulesMetric <a name="AutoscalingAutoScalingConfigurationPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric;

AutoscalingAutoScalingConfigurationPoliciesRulesMetric.builder()
//  .metricType(java.lang.String)
//  .threshold(AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.property.metricType">metricType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#metric_type AutoscalingAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | threshold block. |

---

##### `metricType`<sup>Optional</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#metric_type AutoscalingAutoScalingConfiguration#metric_type}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric.property.threshold"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold getThreshold();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#threshold AutoscalingAutoScalingConfiguration#threshold}

---

### AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold <a name="AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold;

AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.builder()
//  .operator(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#operator AutoscalingAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#operator AutoscalingAutoScalingConfiguration#operator}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#value AutoscalingAutoScalingConfiguration#value}.

---

### AutoscalingAutoScalingConfigurationTimeouts <a name="AutoscalingAutoScalingConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationTimeouts;

AutoscalingAutoScalingConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#create AutoscalingAutoScalingConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#delete AutoscalingAutoScalingConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#update AutoscalingAutoScalingConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#create AutoscalingAutoScalingConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#delete AutoscalingAutoScalingConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/autoscaling_auto_scaling_configuration#update AutoscalingAutoScalingConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference <a name="AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference;

new AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue"></a>

```java
public AutoscalingAutoScalingConfigurationAutoScalingResources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationAutoScalingResources">AutoscalingAutoScalingConfigurationAutoScalingResources</a>

---


### AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference;

new AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetInitial">resetInitial</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetMax">resetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetMin">resetMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInitial` <a name="resetInitial" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetInitial"></a>

```java
public void resetInitial()
```

##### `resetMax` <a name="resetMax" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetMax"></a>

```java
public void resetMax()
```

##### `resetMin` <a name="resetMin" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resetMin"></a>

```java
public void resetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initialInput">initialInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.maxInput">maxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.minInput">minInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial">initial</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `initialInput`<sup>Optional</sup> <a name="initialInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initialInput"></a>

```java
public java.lang.Number getInitialInput();
```

- *Type:* java.lang.Number

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.maxInput"></a>

```java
public java.lang.Number getMaxInput();
```

- *Type:* java.lang.Number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.minInput"></a>

```java
public java.lang.Number getMinInput();
```

- *Type:* java.lang.Number

---

##### `initial`<sup>Required</sup> <a name="initial" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial"></a>

```java
public java.lang.Number getInitial();
```

- *Type:* java.lang.Number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesCapacity getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a>

---


### AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference;

new AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

---


### AutoscalingAutoScalingConfigurationPoliciesList <a name="AutoscalingAutoScalingConfigurationPoliciesList" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesList;

new AutoscalingAutoScalingConfigurationPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.get"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>>

---


### AutoscalingAutoScalingConfigurationPoliciesOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesOutputReference;

new AutoscalingAutoScalingConfigurationPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putExecutionSchedule">putExecutionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putResourceAction">putResourceAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetExecutionSchedule">resetExecutionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetResourceAction">resetResourceAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCapacity` <a name="putCapacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putCapacity"></a>

```java
public void putCapacity(AutoscalingAutoScalingConfigurationPoliciesCapacity value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a>

---

##### `putExecutionSchedule` <a name="putExecutionSchedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putExecutionSchedule"></a>

```java
public void putExecutionSchedule(AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putExecutionSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

---

##### `putResourceAction` <a name="putResourceAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putResourceAction"></a>

```java
public void putResourceAction(AutoscalingAutoScalingConfigurationPoliciesResourceAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putResourceAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

---

##### `putRules` <a name="putRules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putRules"></a>

```java
public void putRules(IResolvable OR java.util.List<AutoscalingAutoScalingConfigurationPoliciesRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.putRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>>

---

##### `resetCapacity` <a name="resetCapacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetCapacity"></a>

```java
public void resetCapacity()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExecutionSchedule` <a name="resetExecutionSchedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetExecutionSchedule"></a>

```java
public void resetExecutionSchedule()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetResourceAction` <a name="resetResourceAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetResourceAction"></a>

```java
public void resetResourceAction()
```

##### `resetRules` <a name="resetRules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference">AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule">executionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference">AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction">resourceAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference">AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList">AutoscalingAutoScalingConfigurationPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacityInput">capacityInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionScheduleInput">executionScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyTypeInput">policyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceActionInput">resourceActionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rulesInput">rulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference getCapacity();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference">AutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference</a>

---

##### `executionSchedule`<sup>Required</sup> <a name="executionSchedule" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference getExecutionSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference">AutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceAction`<sup>Required</sup> <a name="resourceAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference getResourceAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference">AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesList getRules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList">AutoscalingAutoScalingConfigurationPoliciesRulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacityInput"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesCapacity getCapacityInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesCapacity">AutoscalingAutoScalingConfigurationPoliciesCapacity</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `executionScheduleInput`<sup>Optional</sup> <a name="executionScheduleInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionScheduleInput"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule getExecutionScheduleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">AutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyTypeInput"></a>

```java
public java.lang.String getPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceActionInput`<sup>Optional</sup> <a name="resourceActionInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceActionInput"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesResourceAction getResourceActionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rulesInput"></a>

```java
public java.lang.Object getRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPolicies">AutoscalingAutoScalingConfigurationPolicies</a>

---


### AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference;

new AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType">actionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionTypeInput"></a>

```java
public java.lang.String getActionTypeInput();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType"></a>

```java
public java.lang.String getActionType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesResourceAction getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesResourceAction">AutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference;

new AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesAction getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesList <a name="AutoscalingAutoScalingConfigurationPoliciesRulesList" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRulesList;

new AutoscalingAutoScalingConfigurationPoliciesRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.get"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference;

new AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resetMetricType">resetMetricType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putThreshold` <a name="putThreshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.putThreshold"></a>

```java
public void putThreshold(AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

---

##### `resetMetricType` <a name="resetMetricType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resetMetricType"></a>

```java
public void resetMetricType()
```

##### `resetThreshold` <a name="resetThreshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold">threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricTypeInput">metricTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.thresholdInput">thresholdInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType">metricType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference getThreshold();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference</a>

---

##### `metricTypeInput`<sup>Optional</sup> <a name="metricTypeInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricTypeInput"></a>

```java
public java.lang.String getMetricTypeInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.thresholdInput"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold getThresholdInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

---

##### `metricType`<sup>Required</sup> <a name="metricType" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType"></a>

```java
public java.lang.String getMetricType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesMetric getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference;

new AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">AutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

---


### AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference <a name="AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference;

new AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resetMetric">resetMetric</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putAction"></a>

```java
public void putAction(AutoscalingAutoScalingConfigurationPoliciesRulesAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

---

##### `putMetric` <a name="putMetric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putMetric"></a>

```java
public void putMetric(AutoscalingAutoScalingConfigurationPoliciesRulesMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

---

##### `resetAction` <a name="resetAction" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetMetric` <a name="resetMetric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resetMetric"></a>

```java
public void resetMetric()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric">metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference getAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference getMetric();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference">AutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.actionInput"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesAction getActionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesAction">AutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metricInput"></a>

```java
public AutoscalingAutoScalingConfigurationPoliciesRulesMetric getMetricInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesMetric">AutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationPoliciesRules">AutoscalingAutoScalingConfigurationPoliciesRules</a>

---


### AutoscalingAutoScalingConfigurationTimeoutsOutputReference <a name="AutoscalingAutoScalingConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.autoscaling_auto_scaling_configuration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference;

new AutoscalingAutoScalingConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.autoscalingAutoScalingConfiguration.AutoscalingAutoScalingConfigurationTimeouts">AutoscalingAutoScalingConfigurationTimeouts</a>

---



