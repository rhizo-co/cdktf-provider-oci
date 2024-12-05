# `dataOciOnesubscriptionAggregatedComputedUsages` Submodule <a name="`dataOciOnesubscriptionAggregatedComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages oci_onesubscription_aggregated_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsages;

DataOciOnesubscriptionAggregatedComputedUsages.Builder.create(Construct scope, java.lang.String id)
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
    .timeFrom(java.lang.String)
    .timeTo(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOnesubscriptionAggregatedComputedUsagesFilter>)
//  .grouping(java.lang.String)
//  .id(java.lang.String)
//  .parentProduct(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#compartment_id DataOciOnesubscriptionAggregatedComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#subscription_id DataOciOnesubscriptionAggregatedComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.timeFrom">timeFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_from DataOciOnesubscriptionAggregatedComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.timeTo">timeTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_to DataOciOnesubscriptionAggregatedComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.grouping">grouping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#grouping DataOciOnesubscriptionAggregatedComputedUsages#grouping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#id DataOciOnesubscriptionAggregatedComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.parentProduct">parentProduct</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#parent_product DataOciOnesubscriptionAggregatedComputedUsages#parent_product}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#compartment_id DataOciOnesubscriptionAggregatedComputedUsages#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.subscriptionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#subscription_id DataOciOnesubscriptionAggregatedComputedUsages#subscription_id}.

---

##### `timeFrom`<sup>Required</sup> <a name="timeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.timeFrom"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_from DataOciOnesubscriptionAggregatedComputedUsages#time_from}.

---

##### `timeTo`<sup>Required</sup> <a name="timeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.timeTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_to DataOciOnesubscriptionAggregatedComputedUsages#time_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#filter DataOciOnesubscriptionAggregatedComputedUsages#filter}

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.grouping"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#grouping DataOciOnesubscriptionAggregatedComputedUsages#grouping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#id DataOciOnesubscriptionAggregatedComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentProduct`<sup>Optional</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.Initializer.parameter.parentProduct"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#parent_product DataOciOnesubscriptionAggregatedComputedUsages#parent_product}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetGrouping">resetGrouping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetParentProduct">resetParentProduct</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOnesubscriptionAggregatedComputedUsagesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGrouping` <a name="resetGrouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetGrouping"></a>

```java
public void resetGrouping()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetId"></a>

```java
public void resetId()
```

##### `resetParentProduct` <a name="resetParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.resetParentProduct"></a>

```java
public void resetParentProduct()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionAggregatedComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsages;

DataOciOnesubscriptionAggregatedComputedUsages.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsages;

DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsages;

DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsages;

DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOnesubscriptionAggregatedComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOnesubscriptionAggregatedComputedUsages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOnesubscriptionAggregatedComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionAggregatedComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.aggregatedComputedUsages">aggregatedComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList">DataOciOnesubscriptionAggregatedComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.groupingInput">groupingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProductInput">parentProductInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFromInput">timeFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeToInput">timeToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.grouping">grouping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProduct">parentProduct</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFrom">timeFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeTo">timeTo</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aggregatedComputedUsages`<sup>Required</sup> <a name="aggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.aggregatedComputedUsages"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList getAggregatedComputedUsages();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filter"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList">DataOciOnesubscriptionAggregatedComputedUsagesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>>

---

##### `groupingInput`<sup>Optional</sup> <a name="groupingInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.groupingInput"></a>

```java
public java.lang.String getGroupingInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentProductInput`<sup>Optional</sup> <a name="parentProductInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProductInput"></a>

```java
public java.lang.String getParentProductInput();
```

- *Type:* java.lang.String

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionIdInput"></a>

```java
public java.lang.String getSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `timeFromInput`<sup>Optional</sup> <a name="timeFromInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFromInput"></a>

```java
public java.lang.String getTimeFromInput();
```

- *Type:* java.lang.String

---

##### `timeToInput`<sup>Optional</sup> <a name="timeToInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeToInput"></a>

```java
public java.lang.String getTimeToInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `grouping`<sup>Required</sup> <a name="grouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.grouping"></a>

```java
public java.lang.String getGrouping();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.parentProduct"></a>

```java
public java.lang.String getParentProduct();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `timeFrom`<sup>Required</sup> <a name="timeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeFrom"></a>

```java
public java.lang.String getTimeFrom();
```

- *Type:* java.lang.String

---

##### `timeTo`<sup>Required</sup> <a name="timeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.timeTo"></a>

```java
public java.lang.String getTimeTo();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsages.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages;

DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages.builder()
    .build();
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages;

DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages.builder()
    .build();
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct;

DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct.builder()
    .build();
```


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct;

DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct.builder()
    .build();
```


### DataOciOnesubscriptionAggregatedComputedUsagesConfig <a name="DataOciOnesubscriptionAggregatedComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesConfig;

DataOciOnesubscriptionAggregatedComputedUsagesConfig.builder()
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
    .timeFrom(java.lang.String)
    .timeTo(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOnesubscriptionAggregatedComputedUsagesFilter>)
//  .grouping(java.lang.String)
//  .id(java.lang.String)
//  .parentProduct(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#compartment_id DataOciOnesubscriptionAggregatedComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#subscription_id DataOciOnesubscriptionAggregatedComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeFrom">timeFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_from DataOciOnesubscriptionAggregatedComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeTo">timeTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_to DataOciOnesubscriptionAggregatedComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.grouping">grouping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#grouping DataOciOnesubscriptionAggregatedComputedUsages#grouping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#id DataOciOnesubscriptionAggregatedComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.parentProduct">parentProduct</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#parent_product DataOciOnesubscriptionAggregatedComputedUsages#parent_product}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#compartment_id DataOciOnesubscriptionAggregatedComputedUsages#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#subscription_id DataOciOnesubscriptionAggregatedComputedUsages#subscription_id}.

---

##### `timeFrom`<sup>Required</sup> <a name="timeFrom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeFrom"></a>

```java
public java.lang.String getTimeFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_from DataOciOnesubscriptionAggregatedComputedUsages#time_from}.

---

##### `timeTo`<sup>Required</sup> <a name="timeTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.timeTo"></a>

```java
public java.lang.String getTimeTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#time_to DataOciOnesubscriptionAggregatedComputedUsages#time_to}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#filter DataOciOnesubscriptionAggregatedComputedUsages#filter}

---

##### `grouping`<sup>Optional</sup> <a name="grouping" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.grouping"></a>

```java
public java.lang.String getGrouping();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#grouping DataOciOnesubscriptionAggregatedComputedUsages#grouping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#id DataOciOnesubscriptionAggregatedComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentProduct`<sup>Optional</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesConfig.property.parentProduct"></a>

```java
public java.lang.String getParentProduct();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#parent_product DataOciOnesubscriptionAggregatedComputedUsages#parent_product}.

---

### DataOciOnesubscriptionAggregatedComputedUsagesFilter <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesFilter;

DataOciOnesubscriptionAggregatedComputedUsagesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#name DataOciOnesubscriptionAggregatedComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#values DataOciOnesubscriptionAggregatedComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#regex DataOciOnesubscriptionAggregatedComputedUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#name DataOciOnesubscriptionAggregatedComputedUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#values DataOciOnesubscriptionAggregatedComputedUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_aggregated_computed_usages#regex DataOciOnesubscriptionAggregatedComputedUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.cost">cost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.costUnrounded">costUnrounded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.dataCenter">dataCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.netUnitPrice">netUnitPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeMeteredOn">timeMeteredOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.cost"></a>

```java
public java.lang.String getCost();
```

- *Type:* java.lang.String

---

##### `costUnrounded`<sup>Required</sup> <a name="costUnrounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.costUnrounded"></a>

```java
public java.lang.String getCostUnrounded();
```

- *Type:* java.lang.String

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.dataCenter"></a>

```java
public java.lang.String getDataCenter();
```

- *Type:* java.lang.String

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.netUnitPrice"></a>

```java
public java.lang.String getNetUnitPrice();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.product"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList getProduct();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.quantity"></a>

```java
public java.lang.String getQuantity();
```

- *Type:* java.lang.String

---

##### `timeMeteredOn`<sup>Required</sup> <a name="timeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeMeteredOn"></a>

```java
public java.lang.String getTimeMeteredOn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsages</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.partNumber">partNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.productCategory">productCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.billingCategory"></a>

```java
public java.lang.String getBillingCategory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.partNumber"></a>

```java
public java.lang.String getPartNumber();
```

- *Type:* java.lang.String

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.productCategory"></a>

```java
public java.lang.String getProductCategory();
```

- *Type:* java.lang.String

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.provisioningGroup"></a>

```java
public java.lang.String getProvisioningGroup();
```

- *Type:* java.lang.String

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```java
public java.lang.String getUcmRateCardPartType();
```

- *Type:* java.lang.String

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```java
public java.lang.String getUnitOfMeasure();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProductOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesProduct</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.aggregatedComputedUsages">aggregatedComputedUsages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentProduct">parentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentSubscribedServiceId">parentSubscribedServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.planNumber">planNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.pricingModel">pricingModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.rateCardId">rateCardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.subscriptionId">subscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeEnd">timeEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeStart">timeStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aggregatedComputedUsages`<sup>Required</sup> <a name="aggregatedComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.aggregatedComputedUsages"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList getAggregatedComputedUsages();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesAggregatedComputedUsagesList</a>

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentProduct"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList getParentProduct();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList</a>

---

##### `parentSubscribedServiceId`<sup>Required</sup> <a name="parentSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.parentSubscribedServiceId"></a>

```java
public java.lang.String getParentSubscribedServiceId();
```

- *Type:* java.lang.String

---

##### `planNumber`<sup>Required</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.planNumber"></a>

```java
public java.lang.String getPlanNumber();
```

- *Type:* java.lang.String

---

##### `pricingModel`<sup>Required</sup> <a name="pricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.pricingModel"></a>

```java
public java.lang.String getPricingModel();
```

- *Type:* java.lang.String

---

##### `rateCardId`<sup>Required</sup> <a name="rateCardId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.rateCardId"></a>

```java
public java.lang.String getRateCardId();
```

- *Type:* java.lang.String

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.subscriptionId"></a>

```java
public java.lang.String getSubscriptionId();
```

- *Type:* java.lang.String

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeEnd"></a>

```java
public java.lang.String getTimeEnd();
```

- *Type:* java.lang.String

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.timeStart"></a>

```java
public java.lang.String getTimeStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsages</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference;

new DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.partNumber">partNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.productCategory">productCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```java
public java.lang.String getBillingCategory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.partNumber"></a>

```java
public java.lang.String getPartNumber();
```

- *Type:* java.lang.String

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.productCategory"></a>

```java
public java.lang.String getProductCategory();
```

- *Type:* java.lang.String

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.provisioningGroup"></a>

```java
public java.lang.String getProvisioningGroup();
```

- *Type:* java.lang.String

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```java
public java.lang.String getUcmRateCardPartType();
```

- *Type:* java.lang.String

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```java
public java.lang.String getUnitOfMeasure();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProductOutputReference.property.internalValue"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct">DataOciOnesubscriptionAggregatedComputedUsagesAggregatedComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionAggregatedComputedUsagesFilterList <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList;

new DataOciOnesubscriptionAggregatedComputedUsagesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get"></a>

```java
public DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>>

---


### DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_onesubscription_aggregated_computed_usages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference;

new DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionAggregatedComputedUsages.DataOciOnesubscriptionAggregatedComputedUsagesFilter">DataOciOnesubscriptionAggregatedComputedUsagesFilter</a>

---



