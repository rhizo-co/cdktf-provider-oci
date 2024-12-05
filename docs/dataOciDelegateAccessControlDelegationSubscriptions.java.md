# `dataOciDelegateAccessControlDelegationSubscriptions` Submodule <a name="`dataOciDelegateAccessControlDelegationSubscriptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegationSubscriptions <a name="DataOciDelegateAccessControlDelegationSubscriptions" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions oci_delegate_access_control_delegation_subscriptions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptions;

DataOciDelegateAccessControlDelegationSubscriptions.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDelegateAccessControlDelegationSubscriptionsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#compartment_id DataOciDelegateAccessControlDelegationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#display_name DataOciDelegateAccessControlDelegationSubscriptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#id DataOciDelegateAccessControlDelegationSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#state DataOciDelegateAccessControlDelegationSubscriptions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#compartment_id DataOciDelegateAccessControlDelegationSubscriptions#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#display_name DataOciDelegateAccessControlDelegationSubscriptions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#filter DataOciDelegateAccessControlDelegationSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#id DataOciDelegateAccessControlDelegationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#state DataOciDelegateAccessControlDelegationSubscriptions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDelegateAccessControlDelegationSubscriptionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationSubscriptions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptions;

DataOciDelegateAccessControlDelegationSubscriptions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptions;

DataOciDelegateAccessControlDelegationSubscriptions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptions;

DataOciDelegateAccessControlDelegationSubscriptions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptions;

DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationSubscriptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDelegateAccessControlDelegationSubscriptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDelegateAccessControlDelegationSubscriptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegationSubscriptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.delegationSubscriptionSummaryCollection">delegationSubscriptionSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList">DataOciDelegateAccessControlDelegationSubscriptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `delegationSubscriptionSummaryCollection`<sup>Required</sup> <a name="delegationSubscriptionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.delegationSubscriptionSummaryCollection"></a>

```java
public DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList getDelegationSubscriptionSummaryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.filter"></a>

```java
public DataOciDelegateAccessControlDelegationSubscriptionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList">DataOciDelegateAccessControlDelegationSubscriptionsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegationSubscriptionsConfig <a name="DataOciDelegateAccessControlDelegationSubscriptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig;

DataOciDelegateAccessControlDelegationSubscriptionsConfig.builder()
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDelegateAccessControlDelegationSubscriptionsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#compartment_id DataOciDelegateAccessControlDelegationSubscriptions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#display_name DataOciDelegateAccessControlDelegationSubscriptions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#id DataOciDelegateAccessControlDelegationSubscriptions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#state DataOciDelegateAccessControlDelegationSubscriptions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#compartment_id DataOciDelegateAccessControlDelegationSubscriptions#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#display_name DataOciDelegateAccessControlDelegationSubscriptions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#filter DataOciDelegateAccessControlDelegationSubscriptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#id DataOciDelegateAccessControlDelegationSubscriptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#state DataOciDelegateAccessControlDelegationSubscriptions#state}.

---

### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection;

DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection.builder()
    .build();
```


### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems;

DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems.builder()
    .build();
```


### DataOciDelegateAccessControlDelegationSubscriptionsFilter <a name="DataOciDelegateAccessControlDelegationSubscriptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter;

DataOciDelegateAccessControlDelegationSubscriptionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#name DataOciDelegateAccessControlDelegationSubscriptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#values DataOciDelegateAccessControlDelegationSubscriptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#regex DataOciDelegateAccessControlDelegationSubscriptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#name DataOciDelegateAccessControlDelegationSubscriptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#values DataOciDelegateAccessControlDelegationSubscriptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_subscriptions#regex DataOciDelegateAccessControlDelegationSubscriptions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList;

new DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.get"></a>

```java
public DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference;

new DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.serviceProviderId">serviceProviderId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.subscribedServiceType">subscribedServiceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.lifecycleStateDetails"></a>

```java
public java.lang.String getLifecycleStateDetails();
```

- *Type:* java.lang.String

---

##### `serviceProviderId`<sup>Required</sup> <a name="serviceProviderId" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.serviceProviderId"></a>

```java
public java.lang.String getServiceProviderId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subscribedServiceType`<sup>Required</sup> <a name="subscribedServiceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.subscribedServiceType"></a>

```java
public java.lang.String getSubscribedServiceType();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItems</a>

---


### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList;

new DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.get"></a>

```java
public DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference <a name="DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference;

new DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.items"></a>

```java
public DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection">DataOciDelegateAccessControlDelegationSubscriptionsDelegationSubscriptionSummaryCollection</a>

---


### DataOciDelegateAccessControlDelegationSubscriptionsFilterList <a name="DataOciDelegateAccessControlDelegationSubscriptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList;

new DataOciDelegateAccessControlDelegationSubscriptionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.get"></a>

```java
public DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>>

---


### DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference <a name="DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_delegate_access_control_delegation_subscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference;

new DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationSubscriptions.DataOciDelegateAccessControlDelegationSubscriptionsFilter">DataOciDelegateAccessControlDelegationSubscriptionsFilter</a>

---



