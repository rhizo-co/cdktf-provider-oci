# `dataOciMeteringComputationQueries` Submodule <a name="`dataOciMeteringComputationQueries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationQueries <a name="DataOciMeteringComputationQueries" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries oci_metering_computation_queries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueries;

DataOciMeteringComputationQueries.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMeteringComputationQueriesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#compartment_id DataOciMeteringComputationQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#id DataOciMeteringComputationQueries#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#compartment_id DataOciMeteringComputationQueries#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#filter DataOciMeteringComputationQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#id DataOciMeteringComputationQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciMeteringComputationQueriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationQueries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueries;

DataOciMeteringComputationQueries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueries;

DataOciMeteringComputationQueries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueries;

DataOciMeteringComputationQueries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueries;

DataOciMeteringComputationQueries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciMeteringComputationQueries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciMeteringComputationQueries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciMeteringComputationQueries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciMeteringComputationQueries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationQueries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList">DataOciMeteringComputationQueriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.queryCollection">queryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList">DataOciMeteringComputationQueriesQueryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.filter"></a>

```java
public DataOciMeteringComputationQueriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList">DataOciMeteringComputationQueriesFilterList</a>

---

##### `queryCollection`<sup>Required</sup> <a name="queryCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.queryCollection"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionList getQueryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList">DataOciMeteringComputationQueriesQueryCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationQueriesConfig <a name="DataOciMeteringComputationQueriesConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesConfig;

DataOciMeteringComputationQueriesConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciMeteringComputationQueriesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#compartment_id DataOciMeteringComputationQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#id DataOciMeteringComputationQueries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#compartment_id DataOciMeteringComputationQueries#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#filter DataOciMeteringComputationQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#id DataOciMeteringComputationQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMeteringComputationQueriesFilter <a name="DataOciMeteringComputationQueriesFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesFilter;

DataOciMeteringComputationQueriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#name DataOciMeteringComputationQueries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#values DataOciMeteringComputationQueries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#regex DataOciMeteringComputationQueries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#name DataOciMeteringComputationQueries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#values DataOciMeteringComputationQueries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_queries#regex DataOciMeteringComputationQueries#regex}.

---

### DataOciMeteringComputationQueriesQueryCollection <a name="DataOciMeteringComputationQueriesQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollection;

DataOciMeteringComputationQueriesQueryCollection.builder()
    .build();
```


### DataOciMeteringComputationQueriesQueryCollectionItems <a name="DataOciMeteringComputationQueriesQueryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItems;

DataOciMeteringComputationQueriesQueryCollectionItems.builder()
    .build();
```


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition;

DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition.builder()
    .build();
```


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi;

DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi.builder()
    .build();
```


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery;

DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery.builder()
    .build();
```


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast;

DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast.builder()
    .build();
```


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag;

DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationQueriesFilterList <a name="DataOciMeteringComputationQueriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesFilterList;

new DataOciMeteringComputationQueriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.get"></a>

```java
public DataOciMeteringComputationQueriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>>

---


### DataOciMeteringComputationQueriesFilterOutputReference <a name="DataOciMeteringComputationQueriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesFilterOutputReference;

new DataOciMeteringComputationQueriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesFilter">DataOciMeteringComputationQueriesFilter</a>

---


### DataOciMeteringComputationQueriesQueryCollectionItemsList <a name="DataOciMeteringComputationQueriesQueryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsList;

new DataOciMeteringComputationQueriesQueryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.get"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference <a name="DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference;

new DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.queryDefinition">queryDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItems">DataOciMeteringComputationQueriesQueryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `queryDefinition`<sup>Required</sup> <a name="queryDefinition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.queryDefinition"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList getQueryDefinition();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItems">DataOciMeteringComputationQueriesQueryCollectionItems</a>

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.get"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.graph">graph</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">isCumulativeGraph</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `graph`<sup>Required</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```java
public java.lang.String getGraph();
```

- *Type:* java.lang.String

---

##### `isCumulativeGraph`<sup>Required</sup> <a name="isCumulativeGraph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```java
public IResolvable getIsCumulativeGraph();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUi</a>

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.get"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.costAnalysisUi">costAnalysisUi</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.reportQuery">reportQuery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `costAnalysisUi`<sup>Required</sup> <a name="costAnalysisUi" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList getCostAnalysisUi();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionCostAnalysisUiList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `reportQuery`<sup>Required</sup> <a name="reportQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.reportQuery"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList getReportQuery();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionOutputReference.property.internalValue"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinition</a>

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.get"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.forecastType">forecastType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded">timeForecastEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted">timeForecastStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forecastType`<sup>Required</sup> <a name="forecastType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.forecastType"></a>

```java
public java.lang.String getForecastType();
```

- *Type:* java.lang.String

---

##### `timeForecastEnded`<sup>Required</sup> <a name="timeForecastEnded" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded"></a>

```java
public java.lang.String getTimeForecastEnded();
```

- *Type:* java.lang.String

---

##### `timeForecastStarted`<sup>Required</sup> <a name="timeForecastStarted" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted"></a>

```java
public java.lang.String getTimeForecastStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastOutputReference.property.internalValue"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecast</a>

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.get"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTag</a>

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.get"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference <a name="DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference;

new DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.dateRangeName">dateRangeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.granularity">granularity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">isAggregateByTime</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.queryType">queryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```java
public java.lang.Number getCompartmentDepth();
```

- *Type:* java.lang.Number

---

##### `dateRangeName`<sup>Required</sup> <a name="dateRangeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```java
public java.lang.String getDateRangeName();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `forecast`<sup>Required</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.forecast"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList getForecast();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryForecastList</a>

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.granularity"></a>

```java
public java.lang.String getGranularity();
```

- *Type:* java.lang.String

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList getGroupByTag();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList</a>

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```java
public IResolvable getIsAggregateByTime();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.queryType"></a>

```java
public java.lang.String getQueryType();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```java
public java.lang.String getTimeUsageEnded();
```

- *Type:* java.lang.String

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```java
public java.lang.String getTimeUsageStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery">DataOciMeteringComputationQueriesQueryCollectionItemsQueryDefinitionReportQuery</a>

---


### DataOciMeteringComputationQueriesQueryCollectionList <a name="DataOciMeteringComputationQueriesQueryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionList;

new DataOciMeteringComputationQueriesQueryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.get"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciMeteringComputationQueriesQueryCollectionOutputReference <a name="DataOciMeteringComputationQueriesQueryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_metering_computation_queries.DataOciMeteringComputationQueriesQueryCollectionOutputReference;

new DataOciMeteringComputationQueriesQueryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList">DataOciMeteringComputationQueriesQueryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollection">DataOciMeteringComputationQueriesQueryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.property.items"></a>

```java
public DataOciMeteringComputationQueriesQueryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionItemsList">DataOciMeteringComputationQueriesQueryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciMeteringComputationQueriesQueryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationQueries.DataOciMeteringComputationQueriesQueryCollection">DataOciMeteringComputationQueriesQueryCollection</a>

---



