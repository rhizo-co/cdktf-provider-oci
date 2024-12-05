# `dataOciOsubBillingScheduleBillingSchedules` Submodule <a name="`dataOciOsubBillingScheduleBillingSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubBillingScheduleBillingSchedules <a name="DataOciOsubBillingScheduleBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules oci_osub_billing_schedule_billing_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedules;

DataOciOsubBillingScheduleBillingSchedules.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciOsubBillingScheduleBillingSchedulesFilter>)
//  .id(java.lang.String)
//  .subscribedServiceId(java.lang.String)
//  .xOneOriginRegion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.subscribedServiceId">subscribedServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.xOneOriginRegion">xOneOriginRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#filter DataOciOsubBillingScheduleBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribedServiceId`<sup>Optional</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.subscribedServiceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetSubscribedServiceId">resetSubscribedServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetXOneOriginRegion">resetXOneOriginRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOsubBillingScheduleBillingSchedulesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetId"></a>

```java
public void resetId()
```

##### `resetSubscribedServiceId` <a name="resetSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetSubscribedServiceId"></a>

```java
public void resetSubscribedServiceId()
```

##### `resetXOneOriginRegion` <a name="resetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.resetXOneOriginRegion"></a>

```java
public void resetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubBillingScheduleBillingSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedules;

DataOciOsubBillingScheduleBillingSchedules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedules;

DataOciOsubBillingScheduleBillingSchedules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedules;

DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedules;

DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsubBillingScheduleBillingSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsubBillingScheduleBillingSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsubBillingScheduleBillingSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubBillingScheduleBillingSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.billingSchedules">billingSchedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList">DataOciOsubBillingScheduleBillingSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceIdInput">subscribedServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegionInput">xOneOriginRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceId">subscribedServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `billingSchedules`<sup>Required</sup> <a name="billingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.billingSchedules"></a>

```java
public DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList getBillingSchedules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filter"></a>

```java
public DataOciOsubBillingScheduleBillingSchedulesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList">DataOciOsubBillingScheduleBillingSchedulesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `subscribedServiceIdInput`<sup>Optional</sup> <a name="subscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceIdInput"></a>

```java
public java.lang.String getSubscribedServiceIdInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `xOneOriginRegionInput`<sup>Optional</sup> <a name="xOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegionInput"></a>

```java
public java.lang.String getXOneOriginRegionInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `subscribedServiceId`<sup>Required</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscribedServiceId"></a>

```java
public java.lang.String getSubscribedServiceId();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `xOneOriginRegion`<sup>Required</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.xOneOriginRegion"></a>

```java
public java.lang.String getXOneOriginRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubBillingScheduleBillingSchedulesBillingSchedules <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules;

DataOciOsubBillingScheduleBillingSchedulesBillingSchedules.builder()
    .build();
```


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct;

DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct.builder()
    .build();
```


### DataOciOsubBillingScheduleBillingSchedulesConfig <a name="DataOciOsubBillingScheduleBillingSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesConfig;

DataOciOsubBillingScheduleBillingSchedulesConfig.builder()
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
//  .filter(java.util.List<DataOciOsubBillingScheduleBillingSchedulesFilter>)
//  .id(java.lang.String)
//  .subscribedServiceId(java.lang.String)
//  .xOneOriginRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscribedServiceId">subscribedServiceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#compartment_id DataOciOsubBillingScheduleBillingSchedules#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscription_id DataOciOsubBillingScheduleBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#filter DataOciOsubBillingScheduleBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#id DataOciOsubBillingScheduleBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribedServiceId`<sup>Optional</sup> <a name="subscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.subscribedServiceId"></a>

```java
public java.lang.String getSubscribedServiceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#subscribed_service_id DataOciOsubBillingScheduleBillingSchedules#subscribed_service_id}.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesConfig.property.xOneOriginRegion"></a>

```java
public java.lang.String getXOneOriginRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#x_one_origin_region DataOciOsubBillingScheduleBillingSchedules#x_one_origin_region}.

---

### DataOciOsubBillingScheduleBillingSchedulesFilter <a name="DataOciOsubBillingScheduleBillingSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesFilter;

DataOciOsubBillingScheduleBillingSchedulesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#name DataOciOsubBillingScheduleBillingSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#values DataOciOsubBillingScheduleBillingSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#regex DataOciOsubBillingScheduleBillingSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#name DataOciOsubBillingScheduleBillingSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#values DataOciOsubBillingScheduleBillingSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_billing_schedule_billing_schedules#regex DataOciOsubBillingScheduleBillingSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList;

new DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get"></a>

```java
public DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference;

new DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.amount">amount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId">arCustomerTransactionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber">arInvoiceNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency">billingFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus">invoiceStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.orderNumber">orderNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.quantity">quantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeEnd">timeEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing">timeInvoicing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules">DataOciOsubBillingScheduleBillingSchedulesBillingSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.amount"></a>

```java
public java.lang.String getAmount();
```

- *Type:* java.lang.String

---

##### `arCustomerTransactionId`<sup>Required</sup> <a name="arCustomerTransactionId" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId"></a>

```java
public java.lang.String getArCustomerTransactionId();
```

- *Type:* java.lang.String

---

##### `arInvoiceNumber`<sup>Required</sup> <a name="arInvoiceNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber"></a>

```java
public java.lang.String getArInvoiceNumber();
```

- *Type:* java.lang.String

---

##### `billingFrequency`<sup>Required</sup> <a name="billingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency"></a>

```java
public java.lang.String getBillingFrequency();
```

- *Type:* java.lang.String

---

##### `invoiceStatus`<sup>Required</sup> <a name="invoiceStatus" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus"></a>

```java
public java.lang.String getInvoiceStatus();
```

- *Type:* java.lang.String

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice"></a>

```java
public java.lang.String getNetUnitPrice();
```

- *Type:* java.lang.String

---

##### `orderNumber`<sup>Required</sup> <a name="orderNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.orderNumber"></a>

```java
public java.lang.String getOrderNumber();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.product"></a>

```java
public DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList getProduct();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.quantity"></a>

```java
public java.lang.String getQuantity();
```

- *Type:* java.lang.String

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeEnd"></a>

```java
public java.lang.String getTimeEnd();
```

- *Type:* java.lang.String

---

##### `timeInvoicing`<sup>Required</sup> <a name="timeInvoicing" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing"></a>

```java
public java.lang.String getTimeInvoicing();
```

- *Type:* java.lang.String

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesOutputReference.property.internalValue"></a>

```java
public DataOciOsubBillingScheduleBillingSchedulesBillingSchedules getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedules">DataOciOsubBillingScheduleBillingSchedulesBillingSchedules</a>

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList;

new DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get"></a>

```java
public DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference;

new DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber">partNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber"></a>

```java
public java.lang.String getPartNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue"></a>

```java
public DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct">DataOciOsubBillingScheduleBillingSchedulesBillingSchedulesProduct</a>

---


### DataOciOsubBillingScheduleBillingSchedulesFilterList <a name="DataOciOsubBillingScheduleBillingSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesFilterList;

new DataOciOsubBillingScheduleBillingSchedulesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get"></a>

```java
public DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>>

---


### DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference <a name="DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_billing_schedule_billing_schedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference;

new DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOsubBillingScheduleBillingSchedules.DataOciOsubBillingScheduleBillingSchedulesFilter">DataOciOsubBillingScheduleBillingSchedulesFilter</a>

---



