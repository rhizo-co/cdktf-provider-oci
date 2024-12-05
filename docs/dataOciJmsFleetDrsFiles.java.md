# `dataOciJmsFleetDrsFiles` Submodule <a name="`dataOciJmsFleetDrsFiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetDrsFiles <a name="DataOciJmsFleetDrsFiles" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files oci_jms_fleet_drs_files}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFiles;

DataOciJmsFleetDrsFiles.Builder.create(Construct scope, java.lang.String id)
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
    .fleetId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciJmsFleetDrsFilesFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#fleet_id DataOciJmsFleetDrsFiles#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#id DataOciJmsFleetDrsFiles#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.fleetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#fleet_id DataOciJmsFleetDrsFiles#fleet_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#filter DataOciJmsFleetDrsFiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#id DataOciJmsFleetDrsFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciJmsFleetDrsFilesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetDrsFiles resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFiles;

DataOciJmsFleetDrsFiles.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFiles;

DataOciJmsFleetDrsFiles.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFiles;

DataOciJmsFleetDrsFiles.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFiles;

DataOciJmsFleetDrsFiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciJmsFleetDrsFiles.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciJmsFleetDrsFiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciJmsFleetDrsFiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciJmsFleetDrsFiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetDrsFiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.drsFileCollection">drsFileCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList">DataOciJmsFleetDrsFilesDrsFileCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList">DataOciJmsFleetDrsFilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.fleetIdInput">fleetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `drsFileCollection`<sup>Required</sup> <a name="drsFileCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.drsFileCollection"></a>

```java
public DataOciJmsFleetDrsFilesDrsFileCollectionList getDrsFileCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList">DataOciJmsFleetDrsFilesDrsFileCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.filter"></a>

```java
public DataOciJmsFleetDrsFilesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList">DataOciJmsFleetDrsFilesFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>>

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.fleetIdInput"></a>

```java
public java.lang.String getFleetIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFiles.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetDrsFilesConfig <a name="DataOciJmsFleetDrsFilesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesConfig;

DataOciJmsFleetDrsFilesConfig.builder()
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
    .fleetId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciJmsFleetDrsFilesFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#fleet_id DataOciJmsFleetDrsFiles#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#id DataOciJmsFleetDrsFiles#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#fleet_id DataOciJmsFleetDrsFiles#fleet_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#filter DataOciJmsFleetDrsFiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#id DataOciJmsFleetDrsFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciJmsFleetDrsFilesDrsFileCollection <a name="DataOciJmsFleetDrsFilesDrsFileCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesDrsFileCollection;

DataOciJmsFleetDrsFilesDrsFileCollection.builder()
    .build();
```


### DataOciJmsFleetDrsFilesDrsFileCollectionItems <a name="DataOciJmsFleetDrsFilesDrsFileCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesDrsFileCollectionItems;

DataOciJmsFleetDrsFilesDrsFileCollectionItems.builder()
    .build();
```


### DataOciJmsFleetDrsFilesFilter <a name="DataOciJmsFleetDrsFilesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesFilter;

DataOciJmsFleetDrsFilesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#name DataOciJmsFleetDrsFiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#values DataOciJmsFleetDrsFiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#regex DataOciJmsFleetDrsFiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#name DataOciJmsFleetDrsFiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#values DataOciJmsFleetDrsFiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_drs_files#regex DataOciJmsFleetDrsFiles#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetDrsFilesDrsFileCollectionItemsList <a name="DataOciJmsFleetDrsFilesDrsFileCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList;

new DataOciJmsFleetDrsFilesDrsFileCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.get"></a>

```java
public DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference <a name="DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference;

new DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.checksumType">checksumType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.checksumValue">checksumValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.drsFileKey">drsFileKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.drsFileName">drsFileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.fleetId">fleetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.isDefault">isDefault</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItems">DataOciJmsFleetDrsFilesDrsFileCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `checksumType`<sup>Required</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.checksumType"></a>

```java
public java.lang.String getChecksumType();
```

- *Type:* java.lang.String

---

##### `checksumValue`<sup>Required</sup> <a name="checksumValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.checksumValue"></a>

```java
public java.lang.String getChecksumValue();
```

- *Type:* java.lang.String

---

##### `drsFileKey`<sup>Required</sup> <a name="drsFileKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.drsFileKey"></a>

```java
public java.lang.String getDrsFileKey();
```

- *Type:* java.lang.String

---

##### `drsFileName`<sup>Required</sup> <a name="drsFileName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.drsFileName"></a>

```java
public java.lang.String getDrsFileName();
```

- *Type:* java.lang.String

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.fleetId"></a>

```java
public java.lang.String getFleetId();
```

- *Type:* java.lang.String

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciJmsFleetDrsFilesDrsFileCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItems">DataOciJmsFleetDrsFilesDrsFileCollectionItems</a>

---


### DataOciJmsFleetDrsFilesDrsFileCollectionList <a name="DataOciJmsFleetDrsFilesDrsFileCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesDrsFileCollectionList;

new DataOciJmsFleetDrsFilesDrsFileCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.get"></a>

```java
public DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference <a name="DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference;

new DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList">DataOciJmsFleetDrsFilesDrsFileCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollection">DataOciJmsFleetDrsFilesDrsFileCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.property.items"></a>

```java
public DataOciJmsFleetDrsFilesDrsFileCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionItemsList">DataOciJmsFleetDrsFilesDrsFileCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollectionOutputReference.property.internalValue"></a>

```java
public DataOciJmsFleetDrsFilesDrsFileCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesDrsFileCollection">DataOciJmsFleetDrsFilesDrsFileCollection</a>

---


### DataOciJmsFleetDrsFilesFilterList <a name="DataOciJmsFleetDrsFilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesFilterList;

new DataOciJmsFleetDrsFilesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.get"></a>

```java
public DataOciJmsFleetDrsFilesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>>

---


### DataOciJmsFleetDrsFilesFilterOutputReference <a name="DataOciJmsFleetDrsFilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_jms_fleet_drs_files.DataOciJmsFleetDrsFilesFilterOutputReference;

new DataOciJmsFleetDrsFilesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetDrsFiles.DataOciJmsFleetDrsFilesFilter">DataOciJmsFleetDrsFilesFilter</a>

---



