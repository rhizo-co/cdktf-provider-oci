# `apigatewayUsagePlan` Submodule <a name="`apigatewayUsagePlan` Submodule" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayUsagePlan <a name="ApigatewayUsagePlan" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan oci_apigateway_usage_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.Builder.create(Construct scope, java.lang.String id)
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
    .entitlements(IResolvable)
    .entitlements(java.util.List<ApigatewayUsagePlanEntitlements>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ApigatewayUsagePlanTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#compartment_id ApigatewayUsagePlan#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.entitlements">entitlements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>></code> | entitlements block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#defined_tags ApigatewayUsagePlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#display_name ApigatewayUsagePlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#freeform_tags ApigatewayUsagePlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#id ApigatewayUsagePlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#compartment_id ApigatewayUsagePlan#compartment_id}.

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.entitlements"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>>

entitlements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#entitlements ApigatewayUsagePlan#entitlements}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#defined_tags ApigatewayUsagePlan#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#display_name ApigatewayUsagePlan#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#freeform_tags ApigatewayUsagePlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#id ApigatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#timeouts ApigatewayUsagePlan#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.putEntitlements">putEntitlements</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntitlements` <a name="putEntitlements" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.putEntitlements"></a>

```java
public void putEntitlements(IResolvable OR java.util.List<ApigatewayUsagePlanEntitlements> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.putEntitlements.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.putTimeouts"></a>

```java
public void putTimeouts(ApigatewayUsagePlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigatewayUsagePlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlan;

ApigatewayUsagePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigatewayUsagePlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigatewayUsagePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigatewayUsagePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigatewayUsagePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigatewayUsagePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.entitlements">entitlements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList">ApigatewayUsagePlanEntitlementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference">ApigatewayUsagePlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.entitlementsInput">entitlementsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.entitlements"></a>

```java
public ApigatewayUsagePlanEntitlementsList getEntitlements();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList">ApigatewayUsagePlanEntitlementsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.timeouts"></a>

```java
public ApigatewayUsagePlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference">ApigatewayUsagePlanTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entitlementsInput`<sup>Optional</sup> <a name="entitlementsInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.entitlementsInput"></a>

```java
public java.lang.Object getEntitlementsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayUsagePlanConfig <a name="ApigatewayUsagePlanConfig" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanConfig;

ApigatewayUsagePlanConfig.builder()
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
    .entitlements(IResolvable)
    .entitlements(java.util.List<ApigatewayUsagePlanEntitlements>)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .timeouts(ApigatewayUsagePlanTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#compartment_id ApigatewayUsagePlan#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.entitlements">entitlements</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>></code> | entitlements block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#defined_tags ApigatewayUsagePlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#display_name ApigatewayUsagePlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#freeform_tags ApigatewayUsagePlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#id ApigatewayUsagePlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#compartment_id ApigatewayUsagePlan#compartment_id}.

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.entitlements"></a>

```java
public java.lang.Object getEntitlements();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>>

entitlements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#entitlements ApigatewayUsagePlan#entitlements}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#defined_tags ApigatewayUsagePlan#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#display_name ApigatewayUsagePlan#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#freeform_tags ApigatewayUsagePlan#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#id ApigatewayUsagePlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.timeouts"></a>

```java
public ApigatewayUsagePlanTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#timeouts ApigatewayUsagePlan#timeouts}

---

### ApigatewayUsagePlanEntitlements <a name="ApigatewayUsagePlanEntitlements" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlements;

ApigatewayUsagePlanEntitlements.builder()
    .name(java.lang.String)
//  .description(java.lang.String)
//  .quota(ApigatewayUsagePlanEntitlementsQuota)
//  .rateLimit(ApigatewayUsagePlanEntitlementsRateLimit)
//  .targets(IResolvable)
//  .targets(java.util.List<ApigatewayUsagePlanEntitlementsTargets>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#name ApigatewayUsagePlan#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.quota">quota</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota">ApigatewayUsagePlanEntitlementsQuota</a></code> | quota block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.rateLimit">rateLimit</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit">ApigatewayUsagePlanEntitlementsRateLimit</a></code> | rate_limit block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.targets">targets</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a>></code> | targets block. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#name ApigatewayUsagePlan#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}.

---

##### `quota`<sup>Optional</sup> <a name="quota" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.quota"></a>

```java
public ApigatewayUsagePlanEntitlementsQuota getQuota();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota">ApigatewayUsagePlanEntitlementsQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#quota ApigatewayUsagePlan#quota}

---

##### `rateLimit`<sup>Optional</sup> <a name="rateLimit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.rateLimit"></a>

```java
public ApigatewayUsagePlanEntitlementsRateLimit getRateLimit();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit">ApigatewayUsagePlanEntitlementsRateLimit</a>

rate_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}

---

##### `targets`<sup>Optional</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements.property.targets"></a>

```java
public java.lang.Object getTargets();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a>>

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#targets ApigatewayUsagePlan#targets}

---

### ApigatewayUsagePlanEntitlementsQuota <a name="ApigatewayUsagePlanEntitlementsQuota" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsQuota;

ApigatewayUsagePlanEntitlementsQuota.builder()
    .operationOnBreach(java.lang.String)
    .resetPolicy(java.lang.String)
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.property.operationOnBreach">operationOnBreach</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#operation_on_breach ApigatewayUsagePlan#operation_on_breach}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.property.resetPolicy">resetPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#reset_policy ApigatewayUsagePlan#reset_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#unit ApigatewayUsagePlan#unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#value ApigatewayUsagePlan#value}. |

---

##### `operationOnBreach`<sup>Required</sup> <a name="operationOnBreach" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.property.operationOnBreach"></a>

```java
public java.lang.String getOperationOnBreach();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#operation_on_breach ApigatewayUsagePlan#operation_on_breach}.

---

##### `resetPolicy`<sup>Required</sup> <a name="resetPolicy" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.property.resetPolicy"></a>

```java
public java.lang.String getResetPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#reset_policy ApigatewayUsagePlan#reset_policy}.

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#unit ApigatewayUsagePlan#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#value ApigatewayUsagePlan#value}.

---

### ApigatewayUsagePlanEntitlementsRateLimit <a name="ApigatewayUsagePlanEntitlementsRateLimit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsRateLimit;

ApigatewayUsagePlanEntitlementsRateLimit.builder()
    .unit(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#unit ApigatewayUsagePlan#unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#value ApigatewayUsagePlan#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#unit ApigatewayUsagePlan#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#value ApigatewayUsagePlan#value}.

---

### ApigatewayUsagePlanEntitlementsTargets <a name="ApigatewayUsagePlanEntitlementsTargets" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsTargets;

ApigatewayUsagePlanEntitlementsTargets.builder()
    .deploymentId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#deployment_id ApigatewayUsagePlan#deployment_id}. |

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#deployment_id ApigatewayUsagePlan#deployment_id}.

---

### ApigatewayUsagePlanTimeouts <a name="ApigatewayUsagePlanTimeouts" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanTimeouts;

ApigatewayUsagePlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#create ApigatewayUsagePlan#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#delete ApigatewayUsagePlan#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#update ApigatewayUsagePlan#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#create ApigatewayUsagePlan#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#delete ApigatewayUsagePlan#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apigateway_usage_plan#update ApigatewayUsagePlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayUsagePlanEntitlementsList <a name="ApigatewayUsagePlanEntitlementsList" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsList;

new ApigatewayUsagePlanEntitlementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.get"></a>

```java
public ApigatewayUsagePlanEntitlementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>>

---


### ApigatewayUsagePlanEntitlementsOutputReference <a name="ApigatewayUsagePlanEntitlementsOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsOutputReference;

new ApigatewayUsagePlanEntitlementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putQuota">putQuota</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putRateLimit">putRateLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putTargets">putTargets</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resetQuota">resetQuota</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resetRateLimit">resetRateLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resetTargets">resetTargets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQuota` <a name="putQuota" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putQuota"></a>

```java
public void putQuota(ApigatewayUsagePlanEntitlementsQuota value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putQuota.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota">ApigatewayUsagePlanEntitlementsQuota</a>

---

##### `putRateLimit` <a name="putRateLimit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putRateLimit"></a>

```java
public void putRateLimit(ApigatewayUsagePlanEntitlementsRateLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putRateLimit.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit">ApigatewayUsagePlanEntitlementsRateLimit</a>

---

##### `putTargets` <a name="putTargets" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putTargets"></a>

```java
public void putTargets(IResolvable OR java.util.List<ApigatewayUsagePlanEntitlementsTargets> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.putTargets.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a>>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetQuota` <a name="resetQuota" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resetQuota"></a>

```java
public void resetQuota()
```

##### `resetRateLimit` <a name="resetRateLimit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resetRateLimit"></a>

```java
public void resetRateLimit()
```

##### `resetTargets` <a name="resetTargets" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.resetTargets"></a>

```java
public void resetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.quota">quota</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference">ApigatewayUsagePlanEntitlementsQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.rateLimit">rateLimit</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference">ApigatewayUsagePlanEntitlementsRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.targets">targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList">ApigatewayUsagePlanEntitlementsTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.quotaInput">quotaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota">ApigatewayUsagePlanEntitlementsQuota</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.rateLimitInput">rateLimitInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit">ApigatewayUsagePlanEntitlementsRateLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.targetsInput">targetsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `quota`<sup>Required</sup> <a name="quota" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.quota"></a>

```java
public ApigatewayUsagePlanEntitlementsQuotaOutputReference getQuota();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference">ApigatewayUsagePlanEntitlementsQuotaOutputReference</a>

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.rateLimit"></a>

```java
public ApigatewayUsagePlanEntitlementsRateLimitOutputReference getRateLimit();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference">ApigatewayUsagePlanEntitlementsRateLimitOutputReference</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.targets"></a>

```java
public ApigatewayUsagePlanEntitlementsTargetsList getTargets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList">ApigatewayUsagePlanEntitlementsTargetsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `quotaInput`<sup>Optional</sup> <a name="quotaInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.quotaInput"></a>

```java
public ApigatewayUsagePlanEntitlementsQuota getQuotaInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota">ApigatewayUsagePlanEntitlementsQuota</a>

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.rateLimitInput"></a>

```java
public ApigatewayUsagePlanEntitlementsRateLimit getRateLimitInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit">ApigatewayUsagePlanEntitlementsRateLimit</a>

---

##### `targetsInput`<sup>Optional</sup> <a name="targetsInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.targetsInput"></a>

```java
public java.lang.Object getTargetsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlements">ApigatewayUsagePlanEntitlements</a>

---


### ApigatewayUsagePlanEntitlementsQuotaOutputReference <a name="ApigatewayUsagePlanEntitlementsQuotaOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsQuotaOutputReference;

new ApigatewayUsagePlanEntitlementsQuotaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.operationOnBreachInput">operationOnBreachInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.resetPolicyInput">resetPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.operationOnBreach">operationOnBreach</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.resetPolicy">resetPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota">ApigatewayUsagePlanEntitlementsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operationOnBreachInput`<sup>Optional</sup> <a name="operationOnBreachInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.operationOnBreachInput"></a>

```java
public java.lang.String getOperationOnBreachInput();
```

- *Type:* java.lang.String

---

##### `resetPolicyInput`<sup>Optional</sup> <a name="resetPolicyInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.resetPolicyInput"></a>

```java
public java.lang.String getResetPolicyInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `operationOnBreach`<sup>Required</sup> <a name="operationOnBreach" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.operationOnBreach"></a>

```java
public java.lang.String getOperationOnBreach();
```

- *Type:* java.lang.String

---

##### `resetPolicy`<sup>Required</sup> <a name="resetPolicy" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.resetPolicy"></a>

```java
public java.lang.String getResetPolicy();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuotaOutputReference.property.internalValue"></a>

```java
public ApigatewayUsagePlanEntitlementsQuota getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsQuota">ApigatewayUsagePlanEntitlementsQuota</a>

---


### ApigatewayUsagePlanEntitlementsRateLimitOutputReference <a name="ApigatewayUsagePlanEntitlementsRateLimitOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference;

new ApigatewayUsagePlanEntitlementsRateLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit">ApigatewayUsagePlanEntitlementsRateLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.internalValue"></a>

```java
public ApigatewayUsagePlanEntitlementsRateLimit getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsRateLimit">ApigatewayUsagePlanEntitlementsRateLimit</a>

---


### ApigatewayUsagePlanEntitlementsTargetsList <a name="ApigatewayUsagePlanEntitlementsTargetsList" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsTargetsList;

new ApigatewayUsagePlanEntitlementsTargetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.get"></a>

```java
public ApigatewayUsagePlanEntitlementsTargetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a>>

---


### ApigatewayUsagePlanEntitlementsTargetsOutputReference <a name="ApigatewayUsagePlanEntitlementsTargetsOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanEntitlementsTargetsOutputReference;

new ApigatewayUsagePlanEntitlementsTargetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargetsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanEntitlementsTargets">ApigatewayUsagePlanEntitlementsTargets</a>

---


### ApigatewayUsagePlanTimeoutsOutputReference <a name="ApigatewayUsagePlanTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.apigateway_usage_plan.ApigatewayUsagePlanTimeoutsOutputReference;

new ApigatewayUsagePlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.apigatewayUsagePlan.ApigatewayUsagePlanTimeouts">ApigatewayUsagePlanTimeouts</a>

---



