# `dataOciOptimizerRecommendationStrategy` Submodule <a name="`dataOciOptimizerRecommendationStrategy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerRecommendationStrategy <a name="DataOciOptimizerRecommendationStrategy" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy oci_optimizer_recommendation_strategy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategy;

DataOciOptimizerRecommendationStrategy.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentIdInSubtree(java.lang.Boolean)
    .compartmentIdInSubtree(IResolvable)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .recommendationName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.recommendationName">recommendationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}.

---

##### `recommendationName`<sup>Optional</sup> <a name="recommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.recommendationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetRecommendationName">resetRecommendationName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetName"></a>

```java
public void resetName()
```

##### `resetRecommendationName` <a name="resetRecommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetRecommendationName"></a>

```java
public void resetRecommendationName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategy;

DataOciOptimizerRecommendationStrategy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategy;

DataOciOptimizerRecommendationStrategy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategy;

DataOciOptimizerRecommendationStrategy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategy;

DataOciOptimizerRecommendationStrategy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOptimizerRecommendationStrategy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOptimizerRecommendationStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOptimizerRecommendationStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerRecommendationStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList">DataOciOptimizerRecommendationStrategyItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationNameInput">recommendationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationName">recommendationName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.items"></a>

```java
public DataOciOptimizerRecommendationStrategyItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList">DataOciOptimizerRecommendationStrategyItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recommendationNameInput`<sup>Optional</sup> <a name="recommendationNameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationNameInput"></a>

```java
public java.lang.String getRecommendationNameInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recommendationName`<sup>Required</sup> <a name="recommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationName"></a>

```java
public java.lang.String getRecommendationName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerRecommendationStrategyConfig <a name="DataOciOptimizerRecommendationStrategyConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyConfig;

DataOciOptimizerRecommendationStrategyConfig.builder()
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
    .compartmentIdInSubtree(java.lang.Boolean)
    .compartmentIdInSubtree(IResolvable)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .recommendationName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.recommendationName">recommendationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}.

---

##### `recommendationName`<sup>Optional</sup> <a name="recommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.recommendationName"></a>

```java
public java.lang.String getRecommendationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}.

---

### DataOciOptimizerRecommendationStrategyItems <a name="DataOciOptimizerRecommendationStrategyItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItems;

DataOciOptimizerRecommendationStrategyItems.builder()
    .build();
```


### DataOciOptimizerRecommendationStrategyItemsStrategies <a name="DataOciOptimizerRecommendationStrategyItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItemsStrategies;

DataOciOptimizerRecommendationStrategyItemsStrategies.builder()
    .build();
```


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition;

DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerRecommendationStrategyItemsList <a name="DataOciOptimizerRecommendationStrategyItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItemsList;

new DataOciOptimizerRecommendationStrategyItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get"></a>

```java
public DataOciOptimizerRecommendationStrategyItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOptimizerRecommendationStrategyItemsOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItemsOutputReference;

new DataOciOptimizerRecommendationStrategyItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList">DataOciOptimizerRecommendationStrategyItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems">DataOciOptimizerRecommendationStrategyItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.strategies"></a>

```java
public DataOciOptimizerRecommendationStrategyItemsStrategiesList getStrategies();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList">DataOciOptimizerRecommendationStrategyItemsStrategiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.internalValue"></a>

```java
public DataOciOptimizerRecommendationStrategyItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems">DataOciOptimizerRecommendationStrategyItems</a>

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesList <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList;

new DataOciOptimizerRecommendationStrategyItemsStrategiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get"></a>

```java
public DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference;

new DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.isDefault">isDefault</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.parametersDefinition">parametersDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.strategyName">strategyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies">DataOciOptimizerRecommendationStrategyItemsStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `parametersDefinition`<sup>Required</sup> <a name="parametersDefinition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.parametersDefinition"></a>

```java
public DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList getParametersDefinition();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList</a>

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.strategyName"></a>

```java
public java.lang.String getStrategyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.internalValue"></a>

```java
public DataOciOptimizerRecommendationStrategyItemsStrategies getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies">DataOciOptimizerRecommendationStrategyItemsStrategies</a>

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList;

new DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get"></a>

```java
public DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_optimizer_recommendation_strategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference;

new DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.defaultValue">defaultValue</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.isRequired">isRequired</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.possibleValues">possibleValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.defaultValue"></a>

```java
public java.util.List<java.lang.String> getDefaultValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.isRequired"></a>

```java
public IResolvable getIsRequired();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.possibleValues"></a>

```java
public java.util.List<java.lang.String> getPossibleValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.internalValue"></a>

```java
public DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition</a>

---



