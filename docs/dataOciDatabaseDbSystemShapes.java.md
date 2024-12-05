# `dataOciDatabaseDbSystemShapes` Submodule <a name="`dataOciDatabaseDbSystemShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemShapes <a name="DataOciDatabaseDbSystemShapes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes oci_database_db_system_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapes;

DataOciDatabaseDbSystemShapes.Builder.create(Construct scope, java.lang.String id)
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
//  .availabilityDomain(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDbSystemShapesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#compartment_id DataOciDatabaseDbSystemShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#availability_domain DataOciDatabaseDbSystemShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#id DataOciDatabaseDbSystemShapes#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#compartment_id DataOciDatabaseDbSystemShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#availability_domain DataOciDatabaseDbSystemShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#filter DataOciDatabaseDbSystemShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#id DataOciDatabaseDbSystemShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseDbSystemShapesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapes;

DataOciDatabaseDbSystemShapes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapes;

DataOciDatabaseDbSystemShapes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapes;

DataOciDatabaseDbSystemShapes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapes;

DataOciDatabaseDbSystemShapes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseDbSystemShapes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseDbSystemShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseDbSystemShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.dbSystemShapes">dbSystemShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList">DataOciDatabaseDbSystemShapesDbSystemShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList">DataOciDatabaseDbSystemShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dbSystemShapes`<sup>Required</sup> <a name="dbSystemShapes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.dbSystemShapes"></a>

```java
public DataOciDatabaseDbSystemShapesDbSystemShapesList getDbSystemShapes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList">DataOciDatabaseDbSystemShapesDbSystemShapesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.filter"></a>

```java
public DataOciDatabaseDbSystemShapesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList">DataOciDatabaseDbSystemShapesFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemShapesConfig <a name="DataOciDatabaseDbSystemShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapesConfig;

DataOciDatabaseDbSystemShapesConfig.builder()
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
//  .availabilityDomain(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseDbSystemShapesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#compartment_id DataOciDatabaseDbSystemShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#availability_domain DataOciDatabaseDbSystemShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#id DataOciDatabaseDbSystemShapes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#compartment_id DataOciDatabaseDbSystemShapes#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#availability_domain DataOciDatabaseDbSystemShapes#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#filter DataOciDatabaseDbSystemShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#id DataOciDatabaseDbSystemShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDbSystemShapesDbSystemShapes <a name="DataOciDatabaseDbSystemShapesDbSystemShapes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapesDbSystemShapes;

DataOciDatabaseDbSystemShapesDbSystemShapes.builder()
    .build();
```


### DataOciDatabaseDbSystemShapesFilter <a name="DataOciDatabaseDbSystemShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapesFilter;

DataOciDatabaseDbSystemShapesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#name DataOciDatabaseDbSystemShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#values DataOciDatabaseDbSystemShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#regex DataOciDatabaseDbSystemShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#name DataOciDatabaseDbSystemShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#values DataOciDatabaseDbSystemShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_shapes#regex DataOciDatabaseDbSystemShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemShapesDbSystemShapesList <a name="DataOciDatabaseDbSystemShapesDbSystemShapesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapesDbSystemShapesList;

new DataOciDatabaseDbSystemShapesDbSystemShapesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.get"></a>

```java
public DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference <a name="DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference;

new DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount">availableCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode">availableCoreCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs">availableDataStorageInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs">availableDataStoragePerServerInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs">availableDbNodePerNodeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs">availableDbNodeStorageInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs">availableMemoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs">availableMemoryPerNodeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement">coreCountIncrement</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount">maximumNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.maxStorageCount">maxStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minCoreCountPerNode">minCoreCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minDataStorageInTbs">minDataStorageInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minDbNodeStoragePerNodeInGbs">minDbNodeStoragePerNodeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount">minimumCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount">minimumNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minMemoryPerNodeInGbs">minMemoryPerNodeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minStorageCount">minStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily">shapeFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.shapeType">shapeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapes">DataOciDatabaseDbSystemShapesDbSystemShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availableCoreCount`<sup>Required</sup> <a name="availableCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount"></a>

```java
public java.lang.Number getAvailableCoreCount();
```

- *Type:* java.lang.Number

---

##### `availableCoreCountPerNode`<sup>Required</sup> <a name="availableCoreCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode"></a>

```java
public java.lang.Number getAvailableCoreCountPerNode();
```

- *Type:* java.lang.Number

---

##### `availableDataStorageInTbs`<sup>Required</sup> <a name="availableDataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs"></a>

```java
public java.lang.Number getAvailableDataStorageInTbs();
```

- *Type:* java.lang.Number

---

##### `availableDataStoragePerServerInTbs`<sup>Required</sup> <a name="availableDataStoragePerServerInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs"></a>

```java
public java.lang.Number getAvailableDataStoragePerServerInTbs();
```

- *Type:* java.lang.Number

---

##### `availableDbNodePerNodeInGbs`<sup>Required</sup> <a name="availableDbNodePerNodeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs"></a>

```java
public java.lang.Number getAvailableDbNodePerNodeInGbs();
```

- *Type:* java.lang.Number

---

##### `availableDbNodeStorageInGbs`<sup>Required</sup> <a name="availableDbNodeStorageInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs"></a>

```java
public java.lang.Number getAvailableDbNodeStorageInGbs();
```

- *Type:* java.lang.Number

---

##### `availableMemoryInGbs`<sup>Required</sup> <a name="availableMemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs"></a>

```java
public java.lang.Number getAvailableMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `availableMemoryPerNodeInGbs`<sup>Required</sup> <a name="availableMemoryPerNodeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs"></a>

```java
public java.lang.Number getAvailableMemoryPerNodeInGbs();
```

- *Type:* java.lang.Number

---

##### `coreCountIncrement`<sup>Required</sup> <a name="coreCountIncrement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement"></a>

```java
public java.lang.Number getCoreCountIncrement();
```

- *Type:* java.lang.Number

---

##### `maximumNodeCount`<sup>Required</sup> <a name="maximumNodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount"></a>

```java
public java.lang.Number getMaximumNodeCount();
```

- *Type:* java.lang.Number

---

##### `maxStorageCount`<sup>Required</sup> <a name="maxStorageCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.maxStorageCount"></a>

```java
public java.lang.Number getMaxStorageCount();
```

- *Type:* java.lang.Number

---

##### `minCoreCountPerNode`<sup>Required</sup> <a name="minCoreCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minCoreCountPerNode"></a>

```java
public java.lang.Number getMinCoreCountPerNode();
```

- *Type:* java.lang.Number

---

##### `minDataStorageInTbs`<sup>Required</sup> <a name="minDataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minDataStorageInTbs"></a>

```java
public java.lang.Number getMinDataStorageInTbs();
```

- *Type:* java.lang.Number

---

##### `minDbNodeStoragePerNodeInGbs`<sup>Required</sup> <a name="minDbNodeStoragePerNodeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minDbNodeStoragePerNodeInGbs"></a>

```java
public java.lang.Number getMinDbNodeStoragePerNodeInGbs();
```

- *Type:* java.lang.Number

---

##### `minimumCoreCount`<sup>Required</sup> <a name="minimumCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount"></a>

```java
public java.lang.Number getMinimumCoreCount();
```

- *Type:* java.lang.Number

---

##### `minimumNodeCount`<sup>Required</sup> <a name="minimumNodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount"></a>

```java
public java.lang.Number getMinimumNodeCount();
```

- *Type:* java.lang.Number

---

##### `minMemoryPerNodeInGbs`<sup>Required</sup> <a name="minMemoryPerNodeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minMemoryPerNodeInGbs"></a>

```java
public java.lang.Number getMinMemoryPerNodeInGbs();
```

- *Type:* java.lang.Number

---

##### `minStorageCount`<sup>Required</sup> <a name="minStorageCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.minStorageCount"></a>

```java
public java.lang.Number getMinStorageCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `shapeFamily`<sup>Required</sup> <a name="shapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily"></a>

```java
public java.lang.String getShapeFamily();
```

- *Type:* java.lang.String

---

##### `shapeType`<sup>Required</sup> <a name="shapeType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.shapeType"></a>

```java
public java.lang.String getShapeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseDbSystemShapesDbSystemShapes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesDbSystemShapes">DataOciDatabaseDbSystemShapesDbSystemShapes</a>

---


### DataOciDatabaseDbSystemShapesFilterList <a name="DataOciDatabaseDbSystemShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapesFilterList;

new DataOciDatabaseDbSystemShapesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.get"></a>

```java
public DataOciDatabaseDbSystemShapesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>>

---


### DataOciDatabaseDbSystemShapesFilterOutputReference <a name="DataOciDatabaseDbSystemShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_db_system_shapes.DataOciDatabaseDbSystemShapesFilterOutputReference;

new DataOciDatabaseDbSystemShapesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemShapes.DataOciDatabaseDbSystemShapesFilter">DataOciDatabaseDbSystemShapesFilter</a>

---



