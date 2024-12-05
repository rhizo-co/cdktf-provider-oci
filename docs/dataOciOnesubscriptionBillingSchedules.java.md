# `dataOciOnesubscriptionBillingSchedules` Submodule <a name="`dataOciOnesubscriptionBillingSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionBillingSchedules <a name="DataOciOnesubscriptionBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules oci_onesubscription_billing_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedules;

DataOciOnesubscriptionBillingSchedules.Builder.create(Construct scope, java.lang.String id)
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
    .subscriptionId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOnesubscriptionBillingSchedulesFilter>)
//  .id(java.lang.String)
//  .subscribedServiceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.subscribedServiceId">subscribedServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#filter DataOciOnesubscriptionBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribedServiceId`<sup>Optional</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.subscribedServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetSubscribedServiceId">resetSubscribedServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOnesubscriptionBillingSchedulesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetId"></a>

```java
public void resetId()
```

##### `resetSubscribedServiceId` <a name="resetSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetSubscribedServiceId"></a>

```java
public void resetSubscribedServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionBillingSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedules;

DataOciOnesubscriptionBillingSchedules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedules;

DataOciOnesubscriptionBillingSchedules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedules;

DataOciOnesubscriptionBillingSchedules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedules;

DataOciOnesubscriptionBillingSchedules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOnesubscriptionBillingSchedules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionBillingSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOnesubscriptionBillingSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOnesubscriptionBillingSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionBillingSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.billingSchedules">billingSchedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList">DataOciOnesubscriptionBillingSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceIdInput">subscribedServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceId">subscribedServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `billingSchedules`<sup>Required</sup> <a name="billingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.billingSchedules"></a>

```java
public DataOciOnesubscriptionBillingSchedulesBillingSchedulesList getBillingSchedules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filter"></a>

```java
public DataOciOnesubscriptionBillingSchedulesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList">DataOciOnesubscriptionBillingSchedulesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `subscribedServiceIdInput`<sup>Optional</sup> <a name="subscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceIdInput"></a>

```java
public java.lang.String getSubscribedServiceIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceId"></a>

```java
public java.lang.String getSubscribedServiceId();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionBillingSchedulesBillingSchedules <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules;

DataOciOnesubscriptionBillingSchedulesBillingSchedules.builder()
    .build();
```


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct;

DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct.builder()
    .build();
```


### DataOciOnesubscriptionBillingSchedulesConfig <a name="DataOciOnesubscriptionBillingSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesConfig;

DataOciOnesubscriptionBillingSchedulesConfig.builder()
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
    .subscriptionId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOnesubscriptionBillingSchedulesFilter>)
//  .id(java.lang.String)
//  .subscribedServiceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscribedServiceId">subscribedServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#filter DataOciOnesubscriptionBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribedServiceId`<sup>Optional</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscribedServiceId"></a>

```java
public java.lang.String getSubscribedServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}.

---

### DataOciOnesubscriptionBillingSchedulesFilter <a name="DataOciOnesubscriptionBillingSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesFilter;

DataOciOnesubscriptionBillingSchedulesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#name DataOciOnesubscriptionBillingSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#values DataOciOnesubscriptionBillingSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#regex DataOciOnesubscriptionBillingSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#name DataOciOnesubscriptionBillingSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#values DataOciOnesubscriptionBillingSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#regex DataOciOnesubscriptionBillingSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionBillingSchedulesBillingSchedulesList <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList;

new DataOciOnesubscriptionBillingSchedulesBillingSchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get"></a>

```java
public DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference;

new DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId">arCustomerTransactionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber">arInvoiceNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency">billingFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus">invoiceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.orderNumber">orderNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.quantity">quantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.subscribedServiceId">subscribedServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeEnd">timeEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing">timeInvoicing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules">DataOciOnesubscriptionBillingSchedulesBillingSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `arCustomerTransactionId`<sup>Required</sup> <a name="arCustomerTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId"></a>

```java
public java.lang.String getArCustomerTransactionId();
```

- *Type:* java.lang.String

---

##### `arInvoiceNumber`<sup>Required</sup> <a name="arInvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber"></a>

```java
public java.lang.String getArInvoiceNumber();
```

- *Type:* java.lang.String

---

##### `billingFrequency`<sup>Required</sup> <a name="billingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency"></a>

```java
public java.lang.String getBillingFrequency();
```

- *Type:* java.lang.String

---

##### `invoiceStatus`<sup>Required</sup> <a name="invoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus"></a>

```java
public java.lang.String getInvoiceStatus();
```

- *Type:* java.lang.String

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice"></a>

```java
public java.lang.String getNetUnitPrice();
```

- *Type:* java.lang.String

---

##### `orderNumber`<sup>Required</sup> <a name="orderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.orderNumber"></a>

```java
public java.lang.String getOrderNumber();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.product"></a>

```java
public DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList getProduct();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.quantity"></a>

```java
public java.lang.String getQuantity();
```

- *Type:* java.lang.String

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.subscribedServiceId"></a>

```java
public java.lang.String getSubscribedServiceId();
```

- *Type:* java.lang.String

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeEnd"></a>

```java
public java.lang.String getTimeEnd();
```

- *Type:* java.lang.String

---

##### `timeInvoicing`<sup>Required</sup> <a name="timeInvoicing" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing"></a>

```java
public java.lang.String getTimeInvoicing();
```

- *Type:* java.lang.String

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionBillingSchedulesBillingSchedules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules">DataOciOnesubscriptionBillingSchedulesBillingSchedules</a>

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList;

new DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get"></a>

```java
public DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference;

new DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber">partNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber"></a>

```java
public java.lang.String getPartNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct</a>

---


### DataOciOnesubscriptionBillingSchedulesFilterList <a name="DataOciOnesubscriptionBillingSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesFilterList;

new DataOciOnesubscriptionBillingSchedulesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get"></a>

```java
public DataOciOnesubscriptionBillingSchedulesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>>

---


### DataOciOnesubscriptionBillingSchedulesFilterOutputReference <a name="DataOciOnesubscriptionBillingSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_billing_schedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference;

new DataOciOnesubscriptionBillingSchedulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>

---



