# `ospGatewaySubscription` Submodule <a name="`ospGatewaySubscription` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewaySubscription <a name="OspGatewaySubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription oci_osp_gateway_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscription;

OspGatewaySubscription.Builder.create(Construct scope, java.lang.String id)
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
    .email(java.lang.String)
    .ospHomeRegion(java.lang.String)
    .subscription(OspGatewaySubscriptionSubscription)
    .subscriptionId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OspGatewaySubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | subscription block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.email"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.ospHomeRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.subscription"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription OspGatewaySubscription#subscription}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#timeouts OspGatewaySubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription">putSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSubscription` <a name="putSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription"></a>

```java
public void putSubscription(OspGatewaySubscriptionSubscription value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putSubscription.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts"></a>

```java
public void putTimeouts(OspGatewaySubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscription;

OspGatewaySubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscription;

OspGatewaySubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscription;

OspGatewaySubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscription;

OspGatewaySubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OspGatewaySubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OspGatewaySubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OspGatewaySubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OspGatewaySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewaySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType">accountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress">billingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId">billToCustAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode">gsiOrgCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay">isIntentToPay</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions">paymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType">planType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState">upgradeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput">subscriptionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billingAddress"></a>

```java
public OspGatewaySubscriptionBillingAddressList getBillingAddress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList">OspGatewaySubscriptionBillingAddressList</a>

---

##### `billToCustAccountId`<sup>Required</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.billToCustAccountId"></a>

```java
public java.lang.String getBillToCustAccountId();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `gsiOrgCode`<sup>Required</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.gsiOrgCode"></a>

```java
public java.lang.String getGsiOrgCode();
```

- *Type:* java.lang.String

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.isIntentToPay"></a>

```java
public IResolvable getIsIntentToPay();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `paymentGateway`<sup>Required</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentGateway"></a>

```java
public OspGatewaySubscriptionPaymentGatewayList getPaymentGateway();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList">OspGatewaySubscriptionPaymentGatewayList</a>

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.paymentOptions"></a>

```java
public OspGatewaySubscriptionPaymentOptionsList getPaymentOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList">OspGatewaySubscriptionPaymentOptionsList</a>

---

##### `planType`<sup>Required</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.planType"></a>

```java
public java.lang.String getPlanType();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctRoleId`<sup>Required</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctRoleId"></a>

```java
public java.lang.String getShipToCustAcctRoleId();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctSiteId`<sup>Required</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.shipToCustAcctSiteId"></a>

```java
public java.lang.String getShipToCustAcctSiteId();
```

- *Type:* java.lang.String

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscription"></a>

```java
public OspGatewaySubscriptionSubscriptionOutputReference getSubscription();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference">OspGatewaySubscriptionSubscriptionOutputReference</a>

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionPlanNumber"></a>

```java
public java.lang.String getSubscriptionPlanNumber();
```

- *Type:* java.lang.String

---

##### `taxInfo`<sup>Required</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.taxInfo"></a>

```java
public OspGatewaySubscriptionTaxInfoList getTaxInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList">OspGatewaySubscriptionTaxInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeouts"></a>

```java
public OspGatewaySubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference">OspGatewaySubscriptionTimeoutsOutputReference</a>

---

##### `timePersonalToCorporateConv`<sup>Required</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePersonalToCorporateConv"></a>

```java
public java.lang.String getTimePersonalToCorporateConv();
```

- *Type:* java.lang.String

---

##### `timePlanUpgrade`<sup>Required</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timePlanUpgrade"></a>

```java
public java.lang.String getTimePlanUpgrade();
```

- *Type:* java.lang.String

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

---

##### `upgradeState`<sup>Required</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeState"></a>

```java
public java.lang.String getUpgradeState();
```

- *Type:* java.lang.String

---

##### `upgradeStateDetails`<sup>Required</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.upgradeStateDetails"></a>

```java
public java.lang.String getUpgradeStateDetails();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegionInput"></a>

```java
public java.lang.String getOspHomeRegionInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionInput`<sup>Optional</sup> <a name="subscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionInput"></a>

```java
public OspGatewaySubscriptionSubscription getSubscriptionInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewaySubscriptionBillingAddress <a name="OspGatewaySubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionBillingAddress;

OspGatewaySubscriptionBillingAddress.builder()
    .build();
```


### OspGatewaySubscriptionConfig <a name="OspGatewaySubscriptionConfig" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionConfig;

OspGatewaySubscriptionConfig.builder()
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
    .email(java.lang.String)
    .ospHomeRegion(java.lang.String)
    .subscription(OspGatewaySubscriptionSubscription)
    .subscriptionId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(OspGatewaySubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | subscription block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#compartment_id OspGatewaySubscription#compartment_id}.

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email OspGatewaySubscription#email}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.ospHomeRegion"></a>

```java
public java.lang.String getOspHomeRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#osp_home_region OspGatewaySubscription#osp_home_region}.

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscription"></a>

```java
public OspGatewaySubscriptionSubscription getSubscription();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

subscription block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription OspGatewaySubscription#subscription}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_id OspGatewaySubscription#subscription_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionConfig.property.timeouts"></a>

```java
public OspGatewaySubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#timeouts OspGatewaySubscription#timeouts}

---

### OspGatewaySubscriptionPaymentGateway <a name="OspGatewaySubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentGateway;

OspGatewaySubscriptionPaymentGateway.builder()
    .build();
```


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData;

OspGatewaySubscriptionPaymentGatewayMerchantDefinedData.builder()
    .build();
```


### OspGatewaySubscriptionPaymentOptions <a name="OspGatewaySubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentOptions;

OspGatewaySubscriptionPaymentOptions.builder()
    .build();
```


### OspGatewaySubscriptionSubscription <a name="OspGatewaySubscriptionSubscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscription;

OspGatewaySubscriptionSubscription.builder()
    .subscriptionPlanNumber(java.lang.String)
//  .accountType(java.lang.String)
//  .billingAddress(IResolvable)
//  .billingAddress(java.util.List<OspGatewaySubscriptionSubscriptionBillingAddress>)
//  .billToCustAccountId(java.lang.String)
//  .currencyCode(java.lang.String)
//  .gsiOrgCode(java.lang.String)
//  .id(java.lang.String)
//  .isIntentToPay(java.lang.Boolean)
//  .isIntentToPay(IResolvable)
//  .languageCode(java.lang.String)
//  .organizationId(java.lang.String)
//  .paymentGateway(OspGatewaySubscriptionSubscriptionPaymentGateway)
//  .paymentOptions(IResolvable)
//  .paymentOptions(java.util.List<OspGatewaySubscriptionSubscriptionPaymentOptions>)
//  .planType(java.lang.String)
//  .shipToCustAcctRoleId(java.lang.String)
//  .shipToCustAcctSiteId(java.lang.String)
//  .taxInfo(OspGatewaySubscriptionSubscriptionTaxInfo)
//  .timePersonalToCorporateConv(java.lang.String)
//  .timePlanUpgrade(java.lang.String)
//  .timeStart(java.lang.String)
//  .upgradeState(java.lang.String)
//  .upgradeStateDetails(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType">accountType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress">billingAddress</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>></code> | billing_address block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId">billToCustAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode">gsiOrgCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay">isIntentToPay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | payment_gateway block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions">paymentOptions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>></code> | payment_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType">planType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | tax_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState">upgradeState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}. |

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.subscriptionPlanNumber"></a>

```java
public java.lang.String getSubscriptionPlanNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#subscription_plan_number OspGatewaySubscription#subscription_plan_number}.

---

##### `accountType`<sup>Optional</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#account_type OspGatewaySubscription#account_type}.

---

##### `billingAddress`<sup>Optional</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billingAddress"></a>

```java
public java.lang.Object getBillingAddress();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>>

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#billing_address OspGatewaySubscription#billing_address}

---

##### `billToCustAccountId`<sup>Optional</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.billToCustAccountId"></a>

```java
public java.lang.String getBillToCustAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#bill_to_cust_account_id OspGatewaySubscription#bill_to_cust_account_id}.

---

##### `currencyCode`<sup>Optional</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#currency_code OspGatewaySubscription#currency_code}.

---

##### `gsiOrgCode`<sup>Optional</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.gsiOrgCode"></a>

```java
public java.lang.String getGsiOrgCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#gsi_org_code OspGatewaySubscription#gsi_org_code}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#id OspGatewaySubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isIntentToPay`<sup>Optional</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.isIntentToPay"></a>

```java
public java.lang.Object getIsIntentToPay();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#is_intent_to_pay OspGatewaySubscription#is_intent_to_pay}.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#language_code OspGatewaySubscription#language_code}.

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#organization_id OspGatewaySubscription#organization_id}.

---

##### `paymentGateway`<sup>Optional</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentGateway"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentGateway getPaymentGateway();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

payment_gateway block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_gateway OspGatewaySubscription#payment_gateway}

---

##### `paymentOptions`<sup>Optional</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.paymentOptions"></a>

```java
public java.lang.Object getPaymentOptions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>>

payment_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_options OspGatewaySubscription#payment_options}

---

##### `planType`<sup>Optional</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.planType"></a>

```java
public java.lang.String getPlanType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#plan_type OspGatewaySubscription#plan_type}.

---

##### `shipToCustAcctRoleId`<sup>Optional</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctRoleId"></a>

```java
public java.lang.String getShipToCustAcctRoleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_role_id OspGatewaySubscription#ship_to_cust_acct_role_id}.

---

##### `shipToCustAcctSiteId`<sup>Optional</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.shipToCustAcctSiteId"></a>

```java
public java.lang.String getShipToCustAcctSiteId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ship_to_cust_acct_site_id OspGatewaySubscription#ship_to_cust_acct_site_id}.

---

##### `taxInfo`<sup>Optional</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.taxInfo"></a>

```java
public OspGatewaySubscriptionSubscriptionTaxInfo getTaxInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

tax_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_info OspGatewaySubscription#tax_info}

---

##### `timePersonalToCorporateConv`<sup>Optional</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePersonalToCorporateConv"></a>

```java
public java.lang.String getTimePersonalToCorporateConv();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_personal_to_corporate_conv OspGatewaySubscription#time_personal_to_corporate_conv}.

---

##### `timePlanUpgrade`<sup>Optional</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timePlanUpgrade"></a>

```java
public java.lang.String getTimePlanUpgrade();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_plan_upgrade OspGatewaySubscription#time_plan_upgrade}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_start OspGatewaySubscription#time_start}.

---

##### `upgradeState`<sup>Optional</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeState"></a>

```java
public java.lang.String getUpgradeState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state OspGatewaySubscription#upgrade_state}.

---

##### `upgradeStateDetails`<sup>Optional</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription.property.upgradeStateDetails"></a>

```java
public java.lang.String getUpgradeStateDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#upgrade_state_details OspGatewaySubscription#upgrade_state_details}.

---

### OspGatewaySubscriptionSubscriptionBillingAddress <a name="OspGatewaySubscriptionSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionBillingAddress;

OspGatewaySubscriptionSubscriptionBillingAddress.builder()
//  .addressKey(java.lang.String)
//  .city(java.lang.String)
//  .companyName(java.lang.String)
//  .contributorClass(java.lang.String)
//  .country(java.lang.String)
//  .county(java.lang.String)
//  .departmentName(java.lang.String)
//  .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .internalNumber(java.lang.String)
//  .jobTitle(java.lang.String)
//  .lastName(java.lang.String)
//  .line1(java.lang.String)
//  .line2(java.lang.String)
//  .line3(java.lang.String)
//  .line4(java.lang.String)
//  .middleName(java.lang.String)
//  .municipalInscription(java.lang.String)
//  .phoneCountryCode(java.lang.String)
//  .phoneNumber(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .state(java.lang.String)
//  .stateInscription(java.lang.String)
//  .streetName(java.lang.String)
//  .streetNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city">city</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName">companyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county">county</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1">line1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2">line2</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3">line3</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4">line4</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName">middleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province">province</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName">streetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}. |

---

##### `addressKey`<sup>Optional</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#address_key OspGatewaySubscription#address_key}.

---

##### `city`<sup>Optional</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#city OspGatewaySubscription#city}.

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#company_name OspGatewaySubscription#company_name}.

---

##### `contributorClass`<sup>Optional</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#contributor_class OspGatewaySubscription#contributor_class}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#country OspGatewaySubscription#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#county OspGatewaySubscription#county}.

---

##### `departmentName`<sup>Optional</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#department_name OspGatewaySubscription#department_name}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `internalNumber`<sup>Optional</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#internal_number OspGatewaySubscription#internal_number}.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#job_title OspGatewaySubscription#job_title}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `line1`<sup>Optional</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line1 OspGatewaySubscription#line1}.

---

##### `line2`<sup>Optional</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line2 OspGatewaySubscription#line2}.

---

##### `line3`<sup>Optional</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line3 OspGatewaySubscription#line3}.

---

##### `line4`<sup>Optional</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#line4 OspGatewaySubscription#line4}.

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#middle_name OspGatewaySubscription#middle_name}.

---

##### `municipalInscription`<sup>Optional</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#municipal_inscription OspGatewaySubscription#municipal_inscription}.

---

##### `phoneCountryCode`<sup>Optional</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_country_code OspGatewaySubscription#phone_country_code}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#phone_number OspGatewaySubscription#phone_number}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#postal_code OspGatewaySubscription#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#province OspGatewaySubscription#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state OspGatewaySubscription#state}.

---

##### `stateInscription`<sup>Optional</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#state_inscription OspGatewaySubscription#state_inscription}.

---

##### `streetName`<sup>Optional</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_name OspGatewaySubscription#street_name}.

---

##### `streetNumber`<sup>Optional</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#street_number OspGatewaySubscription#street_number}.

---

### OspGatewaySubscriptionSubscriptionPaymentGateway <a name="OspGatewaySubscriptionSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionPaymentGateway;

OspGatewaySubscriptionSubscriptionPaymentGateway.builder()
//  .merchantDefinedData(OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | merchant_defined_data block. |

---

##### `merchantDefinedData`<sup>Optional</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway.property.merchantDefinedData"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData getMerchantDefinedData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

merchant_defined_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#merchant_defined_data OspGatewaySubscription#merchant_defined_data}

---

### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData;

OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.builder()
//  .cloudAccountName(java.lang.String)
//  .promoType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName">cloudAccountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType">promoType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}. |

---

##### `cloudAccountName`<sup>Optional</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.cloudAccountName"></a>

```java
public java.lang.String getCloudAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#cloud_account_name OspGatewaySubscription#cloud_account_name}.

---

##### `promoType`<sup>Optional</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.property.promoType"></a>

```java
public java.lang.String getPromoType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#promo_type OspGatewaySubscription#promo_type}.

---

### OspGatewaySubscriptionSubscriptionPaymentOptions <a name="OspGatewaySubscriptionSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionPaymentOptions;

OspGatewaySubscriptionSubscriptionPaymentOptions.builder()
    .paymentMethod(java.lang.String)
//  .creditCardType(java.lang.String)
//  .emailAddress(java.lang.String)
//  .extBillingAgreementId(java.lang.String)
//  .firstName(java.lang.String)
//  .lastDigits(java.lang.String)
//  .lastName(java.lang.String)
//  .nameOnCard(java.lang.String)
//  .timeExpiration(java.lang.String)
//  .walletInstrumentId(java.lang.String)
//  .walletTransactionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod">paymentMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType">creditCardType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName">firstName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits">lastDigits</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard">nameOnCard</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration">timeExpiration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId">walletInstrumentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId">walletTransactionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}. |

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.paymentMethod"></a>

```java
public java.lang.String getPaymentMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#payment_method OspGatewaySubscription#payment_method}.

---

##### `creditCardType`<sup>Optional</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.creditCardType"></a>

```java
public java.lang.String getCreditCardType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#credit_card_type OspGatewaySubscription#credit_card_type}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#email_address OspGatewaySubscription#email_address}.

---

##### `extBillingAgreementId`<sup>Optional</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.extBillingAgreementId"></a>

```java
public java.lang.String getExtBillingAgreementId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#ext_billing_agreement_id OspGatewaySubscription#ext_billing_agreement_id}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#first_name OspGatewaySubscription#first_name}.

---

##### `lastDigits`<sup>Optional</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastDigits"></a>

```java
public java.lang.String getLastDigits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_digits OspGatewaySubscription#last_digits}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#last_name OspGatewaySubscription#last_name}.

---

##### `nameOnCard`<sup>Optional</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.nameOnCard"></a>

```java
public java.lang.String getNameOnCard();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#name_on_card OspGatewaySubscription#name_on_card}.

---

##### `timeExpiration`<sup>Optional</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.timeExpiration"></a>

```java
public java.lang.String getTimeExpiration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#time_expiration OspGatewaySubscription#time_expiration}.

---

##### `walletInstrumentId`<sup>Optional</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletInstrumentId"></a>

```java
public java.lang.String getWalletInstrumentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_instrument_id OspGatewaySubscription#wallet_instrument_id}.

---

##### `walletTransactionId`<sup>Optional</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions.property.walletTransactionId"></a>

```java
public java.lang.String getWalletTransactionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#wallet_transaction_id OspGatewaySubscription#wallet_transaction_id}.

---

### OspGatewaySubscriptionSubscriptionTaxInfo <a name="OspGatewaySubscriptionSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionTaxInfo;

OspGatewaySubscriptionSubscriptionTaxInfo.builder()
//  .noTaxReasonCode(java.lang.String)
//  .noTaxReasonCodeDetails(java.lang.String)
//  .taxCnpj(java.lang.String)
//  .taxPayerId(java.lang.String)
//  .taxRegNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj">taxCnpj</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId">taxPayerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber">taxRegNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}. |

---

##### `noTaxReasonCode`<sup>Optional</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCode"></a>

```java
public java.lang.String getNoTaxReasonCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code OspGatewaySubscription#no_tax_reason_code}.

---

##### `noTaxReasonCodeDetails`<sup>Optional</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.noTaxReasonCodeDetails"></a>

```java
public java.lang.String getNoTaxReasonCodeDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#no_tax_reason_code_details OspGatewaySubscription#no_tax_reason_code_details}.

---

##### `taxCnpj`<sup>Optional</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxCnpj"></a>

```java
public java.lang.String getTaxCnpj();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_cnpj OspGatewaySubscription#tax_cnpj}.

---

##### `taxPayerId`<sup>Optional</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxPayerId"></a>

```java
public java.lang.String getTaxPayerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_payer_id OspGatewaySubscription#tax_payer_id}.

---

##### `taxRegNumber`<sup>Optional</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo.property.taxRegNumber"></a>

```java
public java.lang.String getTaxRegNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#tax_reg_number OspGatewaySubscription#tax_reg_number}.

---

### OspGatewaySubscriptionTaxInfo <a name="OspGatewaySubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionTaxInfo;

OspGatewaySubscriptionTaxInfo.builder()
    .build();
```


### OspGatewaySubscriptionTimeouts <a name="OspGatewaySubscriptionTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionTimeouts;

OspGatewaySubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#create OspGatewaySubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#delete OspGatewaySubscription#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_subscription#update OspGatewaySubscription#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewaySubscriptionBillingAddressList <a name="OspGatewaySubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionBillingAddressList;

new OspGatewaySubscriptionBillingAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get"></a>

```java
public OspGatewaySubscriptionBillingAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OspGatewaySubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionBillingAddressOutputReference;

new OspGatewaySubscriptionBillingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddressOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionBillingAddress getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionBillingAddress">OspGatewaySubscriptionBillingAddress</a>

---


### OspGatewaySubscriptionPaymentGatewayList <a name="OspGatewaySubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentGatewayList;

new OspGatewaySubscriptionPaymentGatewayList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get"></a>

```java
public OspGatewaySubscriptionPaymentGatewayOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList;

new OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```java
public OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference;

new OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promoType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```java
public java.lang.String getCloudAccountName();
```

- *Type:* java.lang.String

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```java
public java.lang.String getPromoType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionPaymentGatewayMerchantDefinedData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentGatewayOutputReference;

new OspGatewaySubscriptionPaymentGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `merchantDefinedData`<sup>Required</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```java
public OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList getMerchantDefinedData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">OspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionPaymentGateway getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentGateway">OspGatewaySubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentOptionsList;

new OspGatewaySubscriptionPaymentOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get"></a>

```java
public OspGatewaySubscriptionPaymentOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OspGatewaySubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionPaymentOptionsOutputReference;

new OspGatewaySubscriptionPaymentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType">creditCardType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits">lastDigits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">walletInstrumentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId">walletTransactionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```java
public java.lang.String getCreditCardType();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `extBillingAgreementId`<sup>Required</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```java
public java.lang.String getExtBillingAgreementId();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```java
public java.lang.String getLastDigits();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```java
public java.lang.String getNameOnCard();
```

- *Type:* java.lang.String

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```java
public java.lang.String getPaymentMethod();
```

- *Type:* java.lang.String

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```java
public java.lang.String getTimeExpiration();
```

- *Type:* java.lang.String

---

##### `walletInstrumentId`<sup>Required</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```java
public java.lang.String getWalletInstrumentId();
```

- *Type:* java.lang.String

---

##### `walletTransactionId`<sup>Required</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```java
public java.lang.String getWalletTransactionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionPaymentOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionPaymentOptions">OspGatewaySubscriptionPaymentOptions</a>

---


### OspGatewaySubscriptionSubscriptionBillingAddressList <a name="OspGatewaySubscriptionSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionBillingAddressList;

new OspGatewaySubscriptionSubscriptionBillingAddressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get"></a>

```java
public OspGatewaySubscriptionSubscriptionBillingAddressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>>

---


### OspGatewaySubscriptionSubscriptionBillingAddressOutputReference <a name="OspGatewaySubscriptionSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference;

new OspGatewaySubscriptionSubscriptionBillingAddressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey">resetAddressKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName">resetCompanyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass">resetContributorClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName">resetDepartmentName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber">resetInternalNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1">resetLine1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2">resetLine2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3">resetLine3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4">resetLine4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription">resetMunicipalInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode">resetPhoneCountryCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription">resetStateInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName">resetStreetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber">resetStreetNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressKey` <a name="resetAddressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetAddressKey"></a>

```java
public void resetAddressKey()
```

##### `resetCity` <a name="resetCity" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCity"></a>

```java
public void resetCity()
```

##### `resetCompanyName` <a name="resetCompanyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCompanyName"></a>

```java
public void resetCompanyName()
```

##### `resetContributorClass` <a name="resetContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetContributorClass"></a>

```java
public void resetContributorClass()
```

##### `resetCountry` <a name="resetCountry" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetCounty` <a name="resetCounty" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetCounty"></a>

```java
public void resetCounty()
```

##### `resetDepartmentName` <a name="resetDepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetDepartmentName"></a>

```java
public void resetDepartmentName()
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetFirstName` <a name="resetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetInternalNumber` <a name="resetInternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetInternalNumber"></a>

```java
public void resetInternalNumber()
```

##### `resetJobTitle` <a name="resetJobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetJobTitle"></a>

```java
public void resetJobTitle()
```

##### `resetLastName` <a name="resetLastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetLine1` <a name="resetLine1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine1"></a>

```java
public void resetLine1()
```

##### `resetLine2` <a name="resetLine2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine2"></a>

```java
public void resetLine2()
```

##### `resetLine3` <a name="resetLine3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine3"></a>

```java
public void resetLine3()
```

##### `resetLine4` <a name="resetLine4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetLine4"></a>

```java
public void resetLine4()
```

##### `resetMiddleName` <a name="resetMiddleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMiddleName"></a>

```java
public void resetMiddleName()
```

##### `resetMunicipalInscription` <a name="resetMunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetMunicipalInscription"></a>

```java
public void resetMunicipalInscription()
```

##### `resetPhoneCountryCode` <a name="resetPhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneCountryCode"></a>

```java
public void resetPhoneCountryCode()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```

##### `resetPostalCode` <a name="resetPostalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetStateInscription` <a name="resetStateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStateInscription"></a>

```java
public void resetStateInscription()
```

##### `resetStreetName` <a name="resetStreetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetName"></a>

```java
public void resetStreetName()
```

##### `resetStreetNumber` <a name="resetStreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resetStreetNumber"></a>

```java
public void resetStreetNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput">addressKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput">cityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput">companyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput">contributorClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput">countyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput">departmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput">internalNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput">jobTitleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input">line1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input">line2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input">line3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input">line4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput">middleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput">municipalInscriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput">phoneCountryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput">stateInscriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput">streetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput">streetNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey">addressKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName">companyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName">departmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName">middleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName">streetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressKeyInput`<sup>Optional</sup> <a name="addressKeyInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKeyInput"></a>

```java
public java.lang.String getAddressKeyInput();
```

- *Type:* java.lang.String

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.cityInput"></a>

```java
public java.lang.String getCityInput();
```

- *Type:* java.lang.String

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyNameInput"></a>

```java
public java.lang.String getCompanyNameInput();
```

- *Type:* java.lang.String

---

##### `contributorClassInput`<sup>Optional</sup> <a name="contributorClassInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClassInput"></a>

```java
public java.lang.String getContributorClassInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.countyInput"></a>

```java
public java.lang.String getCountyInput();
```

- *Type:* java.lang.String

---

##### `departmentNameInput`<sup>Optional</sup> <a name="departmentNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentNameInput"></a>

```java
public java.lang.String getDepartmentNameInput();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `internalNumberInput`<sup>Optional</sup> <a name="internalNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumberInput"></a>

```java
public java.lang.String getInternalNumberInput();
```

- *Type:* java.lang.String

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitleInput"></a>

```java
public java.lang.String getJobTitleInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `line1Input`<sup>Optional</sup> <a name="line1Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1Input"></a>

```java
public java.lang.String getLine1Input();
```

- *Type:* java.lang.String

---

##### `line2Input`<sup>Optional</sup> <a name="line2Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2Input"></a>

```java
public java.lang.String getLine2Input();
```

- *Type:* java.lang.String

---

##### `line3Input`<sup>Optional</sup> <a name="line3Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3Input"></a>

```java
public java.lang.String getLine3Input();
```

- *Type:* java.lang.String

---

##### `line4Input`<sup>Optional</sup> <a name="line4Input" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4Input"></a>

```java
public java.lang.String getLine4Input();
```

- *Type:* java.lang.String

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleNameInput"></a>

```java
public java.lang.String getMiddleNameInput();
```

- *Type:* java.lang.String

---

##### `municipalInscriptionInput`<sup>Optional</sup> <a name="municipalInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscriptionInput"></a>

```java
public java.lang.String getMunicipalInscriptionInput();
```

- *Type:* java.lang.String

---

##### `phoneCountryCodeInput`<sup>Optional</sup> <a name="phoneCountryCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCodeInput"></a>

```java
public java.lang.String getPhoneCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumberInput"></a>

```java
public java.lang.String getPhoneNumberInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `stateInscriptionInput`<sup>Optional</sup> <a name="stateInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscriptionInput"></a>

```java
public java.lang.String getStateInscriptionInput();
```

- *Type:* java.lang.String

---

##### `streetNameInput`<sup>Optional</sup> <a name="streetNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNameInput"></a>

```java
public java.lang.String getStreetNameInput();
```

- *Type:* java.lang.String

---

##### `streetNumberInput`<sup>Optional</sup> <a name="streetNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumberInput"></a>

```java
public java.lang.String getStreetNumberInput();
```

- *Type:* java.lang.String

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```java
public java.lang.String getAddressKey();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName"></a>

```java
public java.lang.String getCompanyName();
```

- *Type:* java.lang.String

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```java
public java.lang.String getContributorClass();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county"></a>

```java
public java.lang.String getCounty();
```

- *Type:* java.lang.String

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```java
public java.lang.String getDepartmentName();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```java
public java.lang.String getInternalNumber();
```

- *Type:* java.lang.String

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```java
public java.lang.String getJobTitle();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1"></a>

```java
public java.lang.String getLine1();
```

- *Type:* java.lang.String

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2"></a>

```java
public java.lang.String getLine2();
```

- *Type:* java.lang.String

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3"></a>

```java
public java.lang.String getLine3();
```

- *Type:* java.lang.String

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4"></a>

```java
public java.lang.String getLine4();
```

- *Type:* java.lang.String

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName"></a>

```java
public java.lang.String getMiddleName();
```

- *Type:* java.lang.String

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```java
public java.lang.String getMunicipalInscription();
```

- *Type:* java.lang.String

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```java
public java.lang.String getPhoneCountryCode();
```

- *Type:* java.lang.String

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```java
public java.lang.String getPhoneNumber();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```java
public java.lang.String getStateInscription();
```

- *Type:* java.lang.String

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName"></a>

```java
public java.lang.String getStreetName();
```

- *Type:* java.lang.String

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```java
public java.lang.String getStreetNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>

---


### OspGatewaySubscriptionSubscriptionOutputReference <a name="OspGatewaySubscriptionSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionOutputReference;

new OspGatewaySubscriptionSubscriptionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress">putBillingAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway">putPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions">putPaymentOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo">putTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType">resetAccountType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress">resetBillingAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId">resetBillToCustAccountId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode">resetCurrencyCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode">resetGsiOrgCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay">resetIsIntentToPay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway">resetPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions">resetPaymentOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType">resetPlanType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId">resetShipToCustAcctRoleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId">resetShipToCustAcctSiteId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo">resetTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv">resetTimePersonalToCorporateConv</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade">resetTimePlanUpgrade</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart">resetTimeStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState">resetUpgradeState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails">resetUpgradeStateDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBillingAddress` <a name="putBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress"></a>

```java
public void putBillingAddress(IResolvable OR java.util.List<OspGatewaySubscriptionSubscriptionBillingAddress> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putBillingAddress.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>>

---

##### `putPaymentGateway` <a name="putPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway"></a>

```java
public void putPaymentGateway(OspGatewaySubscriptionSubscriptionPaymentGateway value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentGateway.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `putPaymentOptions` <a name="putPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions"></a>

```java
public void putPaymentOptions(IResolvable OR java.util.List<OspGatewaySubscriptionSubscriptionPaymentOptions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putPaymentOptions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>>

---

##### `putTaxInfo` <a name="putTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo"></a>

```java
public void putTaxInfo(OspGatewaySubscriptionSubscriptionTaxInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.putTaxInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `resetAccountType` <a name="resetAccountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetAccountType"></a>

```java
public void resetAccountType()
```

##### `resetBillingAddress` <a name="resetBillingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillingAddress"></a>

```java
public void resetBillingAddress()
```

##### `resetBillToCustAccountId` <a name="resetBillToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetBillToCustAccountId"></a>

```java
public void resetBillToCustAccountId()
```

##### `resetCurrencyCode` <a name="resetCurrencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetCurrencyCode"></a>

```java
public void resetCurrencyCode()
```

##### `resetGsiOrgCode` <a name="resetGsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetGsiOrgCode"></a>

```java
public void resetGsiOrgCode()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIsIntentToPay` <a name="resetIsIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetIsIntentToPay"></a>

```java
public void resetIsIntentToPay()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetOrganizationId"></a>

```java
public void resetOrganizationId()
```

##### `resetPaymentGateway` <a name="resetPaymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentGateway"></a>

```java
public void resetPaymentGateway()
```

##### `resetPaymentOptions` <a name="resetPaymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPaymentOptions"></a>

```java
public void resetPaymentOptions()
```

##### `resetPlanType` <a name="resetPlanType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetPlanType"></a>

```java
public void resetPlanType()
```

##### `resetShipToCustAcctRoleId` <a name="resetShipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctRoleId"></a>

```java
public void resetShipToCustAcctRoleId()
```

##### `resetShipToCustAcctSiteId` <a name="resetShipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetShipToCustAcctSiteId"></a>

```java
public void resetShipToCustAcctSiteId()
```

##### `resetTaxInfo` <a name="resetTaxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTaxInfo"></a>

```java
public void resetTaxInfo()
```

##### `resetTimePersonalToCorporateConv` <a name="resetTimePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePersonalToCorporateConv"></a>

```java
public void resetTimePersonalToCorporateConv()
```

##### `resetTimePlanUpgrade` <a name="resetTimePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimePlanUpgrade"></a>

```java
public void resetTimePlanUpgrade()
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetTimeStart"></a>

```java
public void resetTimeStart()
```

##### `resetUpgradeState` <a name="resetUpgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeState"></a>

```java
public void resetUpgradeState()
```

##### `resetUpgradeStateDetails` <a name="resetUpgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.resetUpgradeStateDetails"></a>

```java
public void resetUpgradeStateDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress">billingAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway">paymentGateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions">paymentOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo">taxInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput">accountTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput">billingAddressInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput">billToCustAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput">currencyCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput">gsiOrgCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput">isIntentToPayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput">paymentGatewayInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput">paymentOptionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput">planTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput">shipToCustAcctRoleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput">shipToCustAcctSiteIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput">subscriptionPlanNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput">taxInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput">timePersonalToCorporateConvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput">timePlanUpgradeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput">timeStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput">upgradeStateDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput">upgradeStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType">accountType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId">billToCustAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode">gsiOrgCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay">isIntentToPay</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType">planType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId">shipToCustAcctRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId">shipToCustAcctSiteId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber">subscriptionPlanNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv">timePersonalToCorporateConv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade">timePlanUpgrade</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState">upgradeState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails">upgradeStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingAddress`<sup>Required</sup> <a name="billingAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress"></a>

```java
public OspGatewaySubscriptionSubscriptionBillingAddressList getBillingAddress();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddressList">OspGatewaySubscriptionSubscriptionBillingAddressList</a>

---

##### `paymentGateway`<sup>Required</sup> <a name="paymentGateway" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference getPaymentGateway();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference</a>

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentOptionsList getPaymentOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList">OspGatewaySubscriptionSubscriptionPaymentOptionsList</a>

---

##### `taxInfo`<sup>Required</sup> <a name="taxInfo" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo"></a>

```java
public OspGatewaySubscriptionSubscriptionTaxInfoOutputReference getTaxInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference">OspGatewaySubscriptionSubscriptionTaxInfoOutputReference</a>

---

##### `accountTypeInput`<sup>Optional</sup> <a name="accountTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountTypeInput"></a>

```java
public java.lang.String getAccountTypeInput();
```

- *Type:* java.lang.String

---

##### `billingAddressInput`<sup>Optional</sup> <a name="billingAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billingAddressInput"></a>

```java
public java.lang.Object getBillingAddressInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionBillingAddress">OspGatewaySubscriptionSubscriptionBillingAddress</a>>

---

##### `billToCustAccountIdInput`<sup>Optional</sup> <a name="billToCustAccountIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountIdInput"></a>

```java
public java.lang.String getBillToCustAccountIdInput();
```

- *Type:* java.lang.String

---

##### `currencyCodeInput`<sup>Optional</sup> <a name="currencyCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCodeInput"></a>

```java
public java.lang.String getCurrencyCodeInput();
```

- *Type:* java.lang.String

---

##### `gsiOrgCodeInput`<sup>Optional</sup> <a name="gsiOrgCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCodeInput"></a>

```java
public java.lang.String getGsiOrgCodeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isIntentToPayInput`<sup>Optional</sup> <a name="isIntentToPayInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPayInput"></a>

```java
public java.lang.Object getIsIntentToPayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `paymentGatewayInput`<sup>Optional</sup> <a name="paymentGatewayInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentGatewayInput"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentGateway getPaymentGatewayInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---

##### `paymentOptionsInput`<sup>Optional</sup> <a name="paymentOptionsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptionsInput"></a>

```java
public java.lang.Object getPaymentOptionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>>

---

##### `planTypeInput`<sup>Optional</sup> <a name="planTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planTypeInput"></a>

```java
public java.lang.String getPlanTypeInput();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctRoleIdInput`<sup>Optional</sup> <a name="shipToCustAcctRoleIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleIdInput"></a>

```java
public java.lang.String getShipToCustAcctRoleIdInput();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctSiteIdInput`<sup>Optional</sup> <a name="shipToCustAcctSiteIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteIdInput"></a>

```java
public java.lang.String getShipToCustAcctSiteIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionPlanNumberInput`<sup>Optional</sup> <a name="subscriptionPlanNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumberInput"></a>

```java
public java.lang.String getSubscriptionPlanNumberInput();
```

- *Type:* java.lang.String

---

##### `taxInfoInput`<sup>Optional</sup> <a name="taxInfoInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.taxInfoInput"></a>

```java
public OspGatewaySubscriptionSubscriptionTaxInfo getTaxInfoInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---

##### `timePersonalToCorporateConvInput`<sup>Optional</sup> <a name="timePersonalToCorporateConvInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConvInput"></a>

```java
public java.lang.String getTimePersonalToCorporateConvInput();
```

- *Type:* java.lang.String

---

##### `timePlanUpgradeInput`<sup>Optional</sup> <a name="timePlanUpgradeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgradeInput"></a>

```java
public java.lang.String getTimePlanUpgradeInput();
```

- *Type:* java.lang.String

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStartInput"></a>

```java
public java.lang.String getTimeStartInput();
```

- *Type:* java.lang.String

---

##### `upgradeStateDetailsInput`<sup>Optional</sup> <a name="upgradeStateDetailsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetailsInput"></a>

```java
public java.lang.String getUpgradeStateDetailsInput();
```

- *Type:* java.lang.String

---

##### `upgradeStateInput`<sup>Optional</sup> <a name="upgradeStateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateInput"></a>

```java
public java.lang.String getUpgradeStateInput();
```

- *Type:* java.lang.String

---

##### `accountType`<sup>Required</sup> <a name="accountType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.accountType"></a>

```java
public java.lang.String getAccountType();
```

- *Type:* java.lang.String

---

##### `billToCustAccountId`<sup>Required</sup> <a name="billToCustAccountId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId"></a>

```java
public java.lang.String getBillToCustAccountId();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `gsiOrgCode`<sup>Required</sup> <a name="gsiOrgCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode"></a>

```java
public java.lang.String getGsiOrgCode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isIntentToPay`<sup>Required</sup> <a name="isIntentToPay" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay"></a>

```java
public java.lang.Object getIsIntentToPay();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `planType`<sup>Required</sup> <a name="planType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.planType"></a>

```java
public java.lang.String getPlanType();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctRoleId`<sup>Required</sup> <a name="shipToCustAcctRoleId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```java
public java.lang.String getShipToCustAcctRoleId();
```

- *Type:* java.lang.String

---

##### `shipToCustAcctSiteId`<sup>Required</sup> <a name="shipToCustAcctSiteId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```java
public java.lang.String getShipToCustAcctSiteId();
```

- *Type:* java.lang.String

---

##### `subscriptionPlanNumber`<sup>Required</sup> <a name="subscriptionPlanNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```java
public java.lang.String getSubscriptionPlanNumber();
```

- *Type:* java.lang.String

---

##### `timePersonalToCorporateConv`<sup>Required</sup> <a name="timePersonalToCorporateConv" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```java
public java.lang.String getTimePersonalToCorporateConv();
```

- *Type:* java.lang.String

---

##### `timePlanUpgrade`<sup>Required</sup> <a name="timePlanUpgrade" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade"></a>

```java
public java.lang.String getTimePlanUpgrade();
```

- *Type:* java.lang.String

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

---

##### `upgradeState`<sup>Required</sup> <a name="upgradeState" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState"></a>

```java
public java.lang.String getUpgradeState();
```

- *Type:* java.lang.String

---

##### `upgradeStateDetails`<sup>Required</sup> <a name="upgradeStateDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails"></a>

```java
public java.lang.String getUpgradeStateDetails();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionSubscription getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscription">OspGatewaySubscriptionSubscription</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference;

new OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName">resetCloudAccountName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType">resetPromoType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudAccountName` <a name="resetCloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetCloudAccountName"></a>

```java
public void resetCloudAccountName()
```

##### `resetPromoType` <a name="resetPromoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resetPromoType"></a>

```java
public void resetPromoType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput">cloudAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput">promoTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloudAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promoType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudAccountNameInput`<sup>Optional</sup> <a name="cloudAccountNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountNameInput"></a>

```java
public java.lang.String getCloudAccountNameInput();
```

- *Type:* java.lang.String

---

##### `promoTypeInput`<sup>Optional</sup> <a name="promoTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoTypeInput"></a>

```java
public java.lang.String getPromoTypeInput();
```

- *Type:* java.lang.String

---

##### `cloudAccountName`<sup>Required</sup> <a name="cloudAccountName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```java
public java.lang.String getCloudAccountName();
```

- *Type:* java.lang.String

---

##### `promoType`<sup>Required</sup> <a name="promoType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```java
public java.lang.String getPromoType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference;

new OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData">putMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData">resetMerchantDefinedData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMerchantDefinedData` <a name="putMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData"></a>

```java
public void putMerchantDefinedData(OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.putMerchantDefinedData.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `resetMerchantDefinedData` <a name="resetMerchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resetMerchantDefinedData"></a>

```java
public void resetMerchantDefinedData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchantDefinedData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput">merchantDefinedDataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `merchantDefinedData`<sup>Required</sup> <a name="merchantDefinedData" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference getMerchantDefinedData();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference</a>

---

##### `merchantDefinedDataInput`<sup>Optional</sup> <a name="merchantDefinedDataInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedDataInput"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData getMerchantDefinedDataInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">OspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentGateway getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentGateway">OspGatewaySubscriptionSubscriptionPaymentGateway</a>

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsList <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList;

new OspGatewaySubscriptionSubscriptionPaymentOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get"></a>

```java
public OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>>

---


### OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference <a name="OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference;

new OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType">resetCreditCardType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId">resetExtBillingAgreementId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits">resetLastDigits</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard">resetNameOnCard</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration">resetTimeExpiration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId">resetWalletInstrumentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId">resetWalletTransactionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreditCardType` <a name="resetCreditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetCreditCardType"></a>

```java
public void resetCreditCardType()
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetExtBillingAgreementId` <a name="resetExtBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetExtBillingAgreementId"></a>

```java
public void resetExtBillingAgreementId()
```

##### `resetFirstName` <a name="resetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastDigits` <a name="resetLastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastDigits"></a>

```java
public void resetLastDigits()
```

##### `resetLastName` <a name="resetLastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetLastName"></a>

```java
public void resetLastName()
```

##### `resetNameOnCard` <a name="resetNameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetNameOnCard"></a>

```java
public void resetNameOnCard()
```

##### `resetTimeExpiration` <a name="resetTimeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetTimeExpiration"></a>

```java
public void resetTimeExpiration()
```

##### `resetWalletInstrumentId` <a name="resetWalletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletInstrumentId"></a>

```java
public void resetWalletInstrumentId()
```

##### `resetWalletTransactionId` <a name="resetWalletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resetWalletTransactionId"></a>

```java
public void resetWalletTransactionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput">creditCardTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput">extBillingAgreementIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput">lastDigitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput">nameOnCardInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput">paymentMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput">timeExpirationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput">walletInstrumentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput">walletTransactionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType">creditCardType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">extBillingAgreementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits">lastDigits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard">nameOnCard</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod">paymentMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration">timeExpiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">walletInstrumentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">walletTransactionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creditCardTypeInput`<sup>Optional</sup> <a name="creditCardTypeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardTypeInput"></a>

```java
public java.lang.String getCreditCardTypeInput();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `extBillingAgreementIdInput`<sup>Optional</sup> <a name="extBillingAgreementIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementIdInput"></a>

```java
public java.lang.String getExtBillingAgreementIdInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastDigitsInput`<sup>Optional</sup> <a name="lastDigitsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigitsInput"></a>

```java
public java.lang.String getLastDigitsInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `nameOnCardInput`<sup>Optional</sup> <a name="nameOnCardInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCardInput"></a>

```java
public java.lang.String getNameOnCardInput();
```

- *Type:* java.lang.String

---

##### `paymentMethodInput`<sup>Optional</sup> <a name="paymentMethodInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethodInput"></a>

```java
public java.lang.String getPaymentMethodInput();
```

- *Type:* java.lang.String

---

##### `timeExpirationInput`<sup>Optional</sup> <a name="timeExpirationInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpirationInput"></a>

```java
public java.lang.String getTimeExpirationInput();
```

- *Type:* java.lang.String

---

##### `walletInstrumentIdInput`<sup>Optional</sup> <a name="walletInstrumentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentIdInput"></a>

```java
public java.lang.String getWalletInstrumentIdInput();
```

- *Type:* java.lang.String

---

##### `walletTransactionIdInput`<sup>Optional</sup> <a name="walletTransactionIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionIdInput"></a>

```java
public java.lang.String getWalletTransactionIdInput();
```

- *Type:* java.lang.String

---

##### `creditCardType`<sup>Required</sup> <a name="creditCardType" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```java
public java.lang.String getCreditCardType();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `extBillingAgreementId`<sup>Required</sup> <a name="extBillingAgreementId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```java
public java.lang.String getExtBillingAgreementId();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastDigits`<sup>Required</sup> <a name="lastDigits" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```java
public java.lang.String getLastDigits();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `nameOnCard`<sup>Required</sup> <a name="nameOnCard" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```java
public java.lang.String getNameOnCard();
```

- *Type:* java.lang.String

---

##### `paymentMethod`<sup>Required</sup> <a name="paymentMethod" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```java
public java.lang.String getPaymentMethod();
```

- *Type:* java.lang.String

---

##### `timeExpiration`<sup>Required</sup> <a name="timeExpiration" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```java
public java.lang.String getTimeExpiration();
```

- *Type:* java.lang.String

---

##### `walletInstrumentId`<sup>Required</sup> <a name="walletInstrumentId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```java
public java.lang.String getWalletInstrumentId();
```

- *Type:* java.lang.String

---

##### `walletTransactionId`<sup>Required</sup> <a name="walletTransactionId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```java
public java.lang.String getWalletTransactionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionPaymentOptions">OspGatewaySubscriptionSubscriptionPaymentOptions</a>

---


### OspGatewaySubscriptionSubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference;

new OspGatewaySubscriptionSubscriptionTaxInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode">resetNoTaxReasonCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails">resetNoTaxReasonCodeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj">resetTaxCnpj</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId">resetTaxPayerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber">resetTaxRegNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNoTaxReasonCode` <a name="resetNoTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCode"></a>

```java
public void resetNoTaxReasonCode()
```

##### `resetNoTaxReasonCodeDetails` <a name="resetNoTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetNoTaxReasonCodeDetails"></a>

```java
public void resetNoTaxReasonCodeDetails()
```

##### `resetTaxCnpj` <a name="resetTaxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxCnpj"></a>

```java
public void resetTaxCnpj()
```

##### `resetTaxPayerId` <a name="resetTaxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxPayerId"></a>

```java
public void resetTaxPayerId()
```

##### `resetTaxRegNumber` <a name="resetTaxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resetTaxRegNumber"></a>

```java
public void resetTaxRegNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput">noTaxReasonCodeDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput">noTaxReasonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput">taxCnpjInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput">taxPayerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput">taxRegNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj">taxCnpj</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId">taxPayerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber">taxRegNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCodeDetailsInput`<sup>Optional</sup> <a name="noTaxReasonCodeDetailsInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetailsInput"></a>

```java
public java.lang.String getNoTaxReasonCodeDetailsInput();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCodeInput`<sup>Optional</sup> <a name="noTaxReasonCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeInput"></a>

```java
public java.lang.String getNoTaxReasonCodeInput();
```

- *Type:* java.lang.String

---

##### `taxCnpjInput`<sup>Optional</sup> <a name="taxCnpjInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpjInput"></a>

```java
public java.lang.String getTaxCnpjInput();
```

- *Type:* java.lang.String

---

##### `taxPayerIdInput`<sup>Optional</sup> <a name="taxPayerIdInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerIdInput"></a>

```java
public java.lang.String getTaxPayerIdInput();
```

- *Type:* java.lang.String

---

##### `taxRegNumberInput`<sup>Optional</sup> <a name="taxRegNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumberInput"></a>

```java
public java.lang.String getTaxRegNumberInput();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCode`<sup>Required</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```java
public java.lang.String getNoTaxReasonCode();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCodeDetails`<sup>Required</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```java
public java.lang.String getNoTaxReasonCodeDetails();
```

- *Type:* java.lang.String

---

##### `taxCnpj`<sup>Required</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```java
public java.lang.String getTaxCnpj();
```

- *Type:* java.lang.String

---

##### `taxPayerId`<sup>Required</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```java
public java.lang.String getTaxPayerId();
```

- *Type:* java.lang.String

---

##### `taxRegNumber`<sup>Required</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```java
public java.lang.String getTaxRegNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionSubscriptionTaxInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionSubscriptionTaxInfo">OspGatewaySubscriptionSubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTaxInfoList <a name="OspGatewaySubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionTaxInfoList;

new OspGatewaySubscriptionTaxInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get"></a>

```java
public OspGatewaySubscriptionTaxInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### OspGatewaySubscriptionTaxInfoOutputReference <a name="OspGatewaySubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionTaxInfoOutputReference;

new OspGatewaySubscriptionTaxInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro">giro</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode">noTaxReasonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">noTaxReasonCodeDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj">taxCnpj</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId">taxPayerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber">taxRegNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `giro`<sup>Required</sup> <a name="giro" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.giro"></a>

```java
public java.lang.String getGiro();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCode`<sup>Required</sup> <a name="noTaxReasonCode" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```java
public java.lang.String getNoTaxReasonCode();
```

- *Type:* java.lang.String

---

##### `noTaxReasonCodeDetails`<sup>Required</sup> <a name="noTaxReasonCodeDetails" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```java
public java.lang.String getNoTaxReasonCodeDetails();
```

- *Type:* java.lang.String

---

##### `taxCnpj`<sup>Required</sup> <a name="taxCnpj" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```java
public java.lang.String getTaxCnpj();
```

- *Type:* java.lang.String

---

##### `taxPayerId`<sup>Required</sup> <a name="taxPayerId" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```java
public java.lang.String getTaxPayerId();
```

- *Type:* java.lang.String

---

##### `taxRegNumber`<sup>Required</sup> <a name="taxRegNumber" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```java
public java.lang.String getTaxRegNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfoOutputReference.property.internalValue"></a>

```java
public OspGatewaySubscriptionTaxInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTaxInfo">OspGatewaySubscriptionTaxInfo</a>

---


### OspGatewaySubscriptionTimeoutsOutputReference <a name="OspGatewaySubscriptionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.osp_gateway_subscription.OspGatewaySubscriptionTimeoutsOutputReference;

new OspGatewaySubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.ospGatewaySubscription.OspGatewaySubscriptionTimeouts">OspGatewaySubscriptionTimeouts</a>

---



